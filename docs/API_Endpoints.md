# InterXview API Documentation

## Base URL
http://localhost:5000/api


---

## 1. Auth Endpoints (`/api/auth`)

### POST `/register`
- **Description:** Register a new user.
- **Request Body:**
```json
{
  "username": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "User registered successfully!",
  "user": {
    "user_id": 1,
    "username": "John Doe",
    "email": "john@example.com"
  }
}
Errors: 400 missing fields, 409 email exists, 500 server error

POST /login
Description: User login.

Request Body:

json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "Login successful!",
  "token": "JWT_TOKEN_HERE"
}
Errors: 400 missing fields, 401 incorrect credentials, 500 server error

2. Interview Endpoints (/api/interview)
POST /start
Description: Start a new interview.

Request Body Example:

json
Copy code
{
  "user_id": 1
}
Response: First question or interview start info.

POST /answer
Description: Submit an answer to an interview question.

Request Body Example:

json
Copy code
{
  "user_id": 1,
  "question_id": 5,
  "answer": "My answer"
}
Response: AI feedback or next question.

3. CV Endpoints (/api/cv)
POST /upload-cv
Description: Upload a CV file.

Form Data: cv (PDF/DOC)

Response:

json
Copy code
{
  "success": true,
  "message": "CV uploaded successfully",
  "file": {
    "filename": "uploaded-file.pdf",
    "size": 12345
  }
}
Errors: 400 no file uploaded

4. CV Text Extraction (/api/cv-text)
POST /extract-text
Description: Upload a CV and extract text.

Form Data: cv (PDF/DOC)

Response: JSON with extracted text from the CV.

5. Root & Test Endpoints
GET /
Description: Check if the API is running.

Response: "InterXview API with PostgreSQL is running!"

GET /test
Description: Test API availability.

Response:

json
Copy code
{
  "message": "API is working"
}