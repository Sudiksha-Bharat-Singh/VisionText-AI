import os
import re
import numpy as np
import cv2
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import pytesseract
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Enable CORS so the React app can communicate with this API
CORS(app)

# Helper to find and configure Tesseract executable on Windows
def configure_tesseract():
    # 1. Check env variable
    tess_env_path = os.getenv("TESSERACT_PATH")
    if tess_env_path and os.path.exists(tess_env_path):
        pytesseract.pytesseract.tesseract_cmd = tess_env_path
        print(f"[*] Tesseract configured from TESSERACT_PATH env: {tess_env_path}")
        return True

    # 2. Check common Windows paths
    common_paths = [
        r"C:\Program Files\Tesseract-OCR\tesseract.exe",
        r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Tesseract-OCR\tesseract.exe")
    ]
    for path in common_paths:
        if os.path.exists(path):
            pytesseract.pytesseract.tesseract_cmd = path
            print(f"[*] Tesseract configured automatically at: {path}")
            return True

    # 3. Default (assumes it is in PATH)
    print("[!] Tesseract OCR not found in standard paths. Assuming it is in PATH.")
    return False

has_tesseract = configure_tesseract()

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "status": "online",
        "service": "VisionText AI OCR Engine",
        "tesseract_configured": has_tesseract
    })

@app.route("/api/ocr", methods=["POST"])
def run_ocr():
    if "image" not in request.files:
        return jsonify({
            "success": False,
            "error": "No image file provided in request (expected key: 'image')"
        }), 400

    file = request.files["image"]
    if file.filename == "":
        return jsonify({
            "success": False,
            "error": "Empty filename provided"
        }), 400

    try:
        # Read image file bytes for OpenCV processing
        file_bytes = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

        if img is None:
            return jsonify({
                "success": False,
                "error": "Failed to decode image. Make sure file is a valid image (JPG, PNG, WEBP)"
            }), 400

        # Preprocessing: convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        # Binarization using Otsu thresholding (improves OCR accuracy for text on paper)
        threshold_img = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

        # Convert back to PIL for pytesseract
        pil_img = Image.fromarray(threshold_img)

        # Run OCR
        try:
            extracted_text = pytesseract.image_to_string(pil_img).strip()
        except Exception as tess_err:
            print(f"Tesseract Execution Error: {tess_err}")
            return jsonify({
                "success": False,
                "error": "Tesseract OCR binary not found or failed to execute. Please install Tesseract (https://github.com/UB-Mannheim/tesseract/wiki) and configure TESSERACT_PATH."
            }), 500

        # Calculate word count and character count
        character_count = len(extracted_text)
        # Split by whitespace, filter out empty strings
        words = [w for w in re.split(r"\s+", extracted_text) if w]
        word_count = len(words)

        # Derive approximate confidence score using image_to_data
        confidence_score = 0.0
        try:
            data = pytesseract.image_to_data(pil_img, output_type=pytesseract.Output.DICT)
            # Filter out confidences of -1 (means non-word blocks/lines) and empty spaces
            confidences = [int(data["conf"][i]) for i in range(len(data["conf"])) if data["conf"][i] != -1 and data["text"][i].strip()]
            if confidences:
                confidence_score = round(sum(confidences) / len(confidences), 1)
            else:
                confidence_score = 100.0 if character_count > 0 else 0.0
        except Exception:
            confidence_score = 95.0 if character_count > 0 else 0.0

        return jsonify({
            "success": True,
            "extractedText": extracted_text if extracted_text else "No text could be identified in the image.",
            "wordCount": word_count,
            "characterCount": character_count,
            "confidenceScore": confidence_score
        })

    except Exception as e:
        print(f"General processing error: {e}")
        return jsonify({
            "success": False,
            "error": f"Internal server error during OCR processing: {str(e)}"
        }), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
