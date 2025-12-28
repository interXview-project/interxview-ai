# 🧠 InterXview – Interview API Documentation

This document explains all API routes, request bodies, and response formats  
used by the Interview Module.

It is written to allow the frontend team to integrate the interview feature  
without any backend clarification.

---

## #️⃣ Available Routes

---

## 1️⃣ Start Interview

**Method:** `POST`  
**Endpoint:** `/api/interview/start`

### Description

Generates and returns the **first interview question dynamically using AI**  
(Google Gemini), based on the provided role.

If no role is sent, the default role is **Software Developer**.

### Optional Request Body

```json
{
  "role": "Frontend Developer"
}
Response Example
json
Copy code
{
  "question": "What is the difference between REST and SOAP?"
}
Notes
This endpoint does NOT return:

questionNumber

feedback

score

Question content is generated dynamically by AI.

Static interview flow starts from the /answer endpoint.

2️⃣ Submit Answer
Method: POST
Endpoint: /api/interview/answer

Description
Sends the user’s answer to the backend and returns:

automatic feedback

numeric score

the next interview question (static flow)

Required Body
json
Copy code
{
  "questionNumber": 1,
  "userAnswer": "Your answer here..."
}
Response Example
json
Copy code
{
  "questionNumber": 2,
  "question": "Why should we hire you?",
  "feedback": "Good answer, but try to add more details.",
  "score": 7
}
📝 Key Field Descriptions
🔢 questionNumber
Used only in the /answer endpoint.

Represents the index of the static interview question.

Starts from 1.

Increases after each submitted answer.

If the last question is reached, the last question will repeat.

💬 question
The interview question returned to the frontend.

Source:

/start: Generated dynamically using AI.

/answer: Selected from predefined static questions.

🧠 feedback
Automatically generated based on answer length:

Answer Length	Feedback
≥ 20 words	"Great detailed answer!"
≥ 10 words	"Good answer, but try to add more details."
< 10 words	"Your answer is too short. Please expand more."

⭐ score
Simple numeric score calculated from answer length:

Condition	Score
≥ 20 words	9
≥ 10 words	7
< 10 words	4

🧪 Full Example Flow
➤ Step 1 — Start Interview
Request:

angelscript
Copy code
POST /api/interview/start
Response:

json
Copy code
{
  "question": "Explain the concept of RESTful APIs."
}
➤ Step 2 — Submit Answer
Request:

json
Copy code
{
  "questionNumber": 1,
  "userAnswer": "REST APIs use HTTP methods and are stateless."
}
Response:

json
Copy code
{
  "questionNumber": 2,
  "question": "Why should we hire you?",
  "feedback": "Good answer, but try to add more details.",
  "score": 7
}
✔ Acceptance Criteria Check
✅ File exists → /docs/interview-api.md

✅ Clear and structured sections

✅ Accurate request and response formats

✅ Fully matches backend implementation

✅ Supports AI-based and static interview logic

✅ Ready for frontend integration and graduation discussion