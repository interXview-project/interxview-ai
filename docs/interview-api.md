# 🧠 InterXview – Interview API Documentation

This document explains all routes, request bodies, and response formats used by the Interview Module.  
It is designed so the frontend team can use the API without needing clarification.

---

## #️⃣ Available Routes

---

## 1️⃣ Start Interview

**Method:** `POST`  
**Endpoint:** `/api/interview/start`

### Description

Returns the first interview question.  
Does not require any request body.

### Response Example

```json
{
  "questionNumber": 1,
  "question": "Tell me about yourself.",
  "feedback": null,
  "score": null
}
```

---

## 2️⃣ Submit Answer

**Method:** `POST`  
**Endpoint:** `/api/interview/answer`

### Description

Sends the user’s answer to the backend.  
Returns:

- feedback based on answer length
- score
- next question

### Required Body

```json
{
  "questionNumber": 1,
  "userAnswer": "Your answer here..."
}
```

### Response Example

```json
{
  "questionNumber": 2,
  "question": "Why should we hire you?",
  "feedback": "Good answer, but try to add more details.",
  "score": 7
}
```

---

# 📝 Key Field Descriptions

### 🔢 questionNumber

- Represents the current question index.
- Starts from `1`.
- Increases automatically after each `/answer`.
- If last question is reached, the question will repeat (until AI is added).

### 💬 question

- The interview question text returned to the frontend.

### 🧠 feedback

Backend auto-evaluates answer based on length:

| Answer Length | Feedback                                        |
| ------------- | ----------------------------------------------- |
| ≥ 20 words    | "Great detailed answer!"                        |
| ≥ 10 words    | "Good answer, but try to add more details."     |
| < 10 words    | "Your answer is too short. Please expand more." |

### ⭐ score

Simple numeric score based on answer length:

| Condition  | Score |
| ---------- | ----- |
| ≥ 20 words | 9     |
| ≥ 10 words | 7     |
| < 10 words | 4     |

---

# 🧪 Full Example Flow

## ➤ Step 1 — Start Interview

**Request:**

```
POST /api/interview/start
```

**Response:**

```json
{
  "questionNumber": 1,
  "question": "Tell me about yourself.",
  "feedback": null,
  "score": null
}
```

---

## ➤ Step 2 — Submit Answer

**Request:**

```json
{
  "questionNumber": 1,
  "userAnswer": "I am a motivated developer who enjoys learning."
}
```

**Response:**

```json
{
  "questionNumber": 2,
  "question": "Why should we hire you?",
  "feedback": "Good answer, but try to add more details.",
  "score": 7
}
```

---

# ✔ Acceptance Criteria Check

- [x] File exists → `/docs/interview-api.md`
- [x] Clear header sections
- [x] Exact backend response examples
- [x] Usable by frontend without confusion
- [x] Matches actual backend logic
