# CV Evaluation Criteria - InterXview AI

## 1. Evaluation Sections

Each CV is divided into the following sections:

| Section                  | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| Personal Information     | Name, email, phone, LinkedIn/GitHub links                           |
| Summary / Objective      | Short paragraph summarizing career goals and skills                 |
| Experience               | Work experience, company, job title, responsibilities, achievements |
| Skills                   | Technical and soft skills                                           |
| Projects                 | Academic or professional projects, used technologies, outcomes      |
| Education                | Degrees, specialization, GPA, graduation year                       |
| Certifications / Courses | Relevant courses or certificates                                    |
| Additional Sections      | Optional: Languages, hobbies, volunteering                          |

---

## 2. Scoring Logic

Each section is scored with a maximum value and weighted based on importance:

| Section                  | Max Score | Weight (%) | Notes                                            |
| ------------------------ | --------- | ---------- | ------------------------------------------------ |
| Personal Information     | 5         | 5%         | Completeness and accuracy                        |
| Summary / Objective      | 10        | 10%        | Clarity and professionalism                      |
| Experience               | 30        | 30%        | Quantity and quality of experience, achievements |
| Skills                   | 20        | 20%        | Technical and soft skills variety                |
| Projects                 | 15        | 15%        | Detail, results, used technologies               |
| Education                | 10        | 10%        | Academic level and relevance                     |
| Certifications / Courses | 5         | 5%         | Relevance and added value                        |
| Additional Sections      | 5         | 5%         | Additional uniqueness and organization           |

**Total:** 100 points → converted to **Job-Readiness Score**

---

## 3. Feedback Categories

For each section, AI generates feedback including:

- **Strengths:** What is strong or well-done
- **Weaknesses:** Missing or improvable aspects
- **Improvements:** Suggestions for enhancement
- **Missing Keywords:** Suggested ATS keywords
- **Rewrite Suggestions:** AI-generated improved phrasing
- **Critical Issues:** Serious gaps or errors
- **Clarity Issues:** Problems with readability or coherence
- **Formatting Issues:** Layout, font, or style inconsistencies

**Example - Experience Section:**

- Strength: Clear details of roles and achievements
- Weakness: Some jobs lack task descriptions
- Improvement Tip: Add key responsibilities and measurable results
- Missing Keywords: Include relevant industry keywords like "Project Management, Agile, SQL"
- Formatting/Clarity Issues: Ensure dates and titles are aligned and readable

---

## 4. AI Integration

- CVs are uploaded and analyzed using **OpenAI API**
- AI evaluates each section and generates a **Feedback Object** including clarity and formatting checks
- **Job-Readiness Score** is calculated automatically based on weighted points
- Users can request a fully improved version of the CV based on recommendations
