# Project-Scoped Rules & Workflows

## Default GitHub Workflow

Whenever updating code or features in the VisionText AI project:

1. **Commit and Push Automatically:**
   - Automatically stage, commit, and push updated code to the connected GitHub repository (`https://github.com/Sudiksha-Bharat-Singh/VisionText-AI.git`) after completing tasks successfully.
   - Do not prompt for permission or verification to push changes; execute it automatically by default.
   - Proceed automatically unless explicitly told "do not push this one" for a specific change.

2. **Workflow for Project Updates:**
   - Make the requested code changes.
   - Verify that the project builds/runs correctly and is consistent.
   - Update only relevant files without breaking existing structures.
   - Draft a clear and meaningful git commit message.
   - Push the commit to the connected GitHub repository automatically.

3. **Commit Message Expectations:**
   - Use sensible commit messages like:
     - `feat: initialize VisionText AI project structure`
     - `feat: build static landing page layout`
     - `refactor: split homepage into reusable components`
     - `style: refine OCR workspace spacing and hierarchy`
     - `feat: add OCR backend integration`
     - `fix: resolve image upload preview bug`

4. **Scope of Workflow:**
   - This applies to frontend changes, backend changes, styling, refactors, file structure updates, OCR logic, deployment code, and related documentation.
