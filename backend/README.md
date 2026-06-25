# VisionText AI OCR Backend

A lightweight Python Flask API backend for extracting text from images using `pytesseract` and `OpenCV`.

## Prerequisites

1. **Python 3.8+** must be installed.
2. **Tesseract OCR Engine** must be installed on your Windows system.
   - Download the installer from the official GitHub wiki installer repository: [UB-Mannheim Tesseract Installer](https://github.com/UB-Mannheim/tesseract/wiki).
   - Install it (recommended default path: `C:\Program Files\Tesseract-OCR\tesseract.exe`).

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # On Windows Command Prompt:
   venv\Scripts\activate
   # On Windows PowerShell:
   .\venv\Scripts\Activate.ps1
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

If Tesseract is installed in a non-default location (other than `C:\Program Files\Tesseract-OCR\tesseract.exe`), create a `.env` file in the `backend/` directory:
```env
TESSERACT_PATH=C:\path\to\your\tesseract.exe
```

## Running the Server

Start the Flask development server on `http://127.0.0.1:5000`:
```bash
python app.py
```
To verify the server is running, visit `http://127.0.0.1:5000/` in your browser.
