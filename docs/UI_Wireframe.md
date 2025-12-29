# UI Wireframes - InterXview Project

---

## 1. Home Page (`/`)
- **Purpose:** Landing page for all users, public access.
- **Layout:**
  - Header/Navbar: Logo, Navigation links (Home, Login, Signup)
  - Main Section:
    - Welcome message
    - Call-to-action buttons (Login / Sign Up)
    - Feature highlights or app overview
  - Footer: Contact & Support
- **Navigation:**
  - Login → `/login`
  - Sign Up → `/signup`
  - Protected routes not accessible until login
- **Wireframe Image:**  
  `![Home Page Wireframe](path/to/home.png)`

---

## 2. Login Page (`/login`)
- **Purpose:** Allow existing users to log in.
- **Layout:**
  - Header: App name / logo
  - Login Form:
    - Email input
    - Password input
    - Submit button
    - Link to Sign Up
- **Navigation:**
  - Successful login → redirect to `/dashboard` or previous page
- **Wireframe Image:**  
  `![Login Page Wireframe](path/to/login.png)`

---

## 3. Sign Up Page (`/signup`)
- **Purpose:** Allow new users to create an account.
- **Layout:**
  - Header: App name / logo
  - Sign Up Form:
    - Username input
    - Email input
    - Password input
    - Submit button
    - Link to Login
- **Navigation:**  
  - Successful signup → redirect to `/dashboard`
- **Wireframe Image:**  
  `![Sign Up Page Wireframe](path/to/signup.png)`

---

## 4. Interview Page (`/interview`) [Protected]
- **Purpose:** Conduct AI-driven interviews.
- **Layout:**
  - Header/Navbar: User menu, Logout
  - Main Section:
    - Current question display
    - Answer input (textarea)
    - Submit / Next button
    - AI feedback bubbles
  - Sidebar / Progress bar (optional)
- **Navigation:**
  - Navigate between questions dynamically
- **Wireframe Image:**  
  `![Interview Page Wireframe](path/to/interview.png)`

---

## 5. Dashboard Page (`/dashboard`) [Protected]
- **Purpose:** Overview of user activity, interviews, CV status, performance metrics.
- **Layout:**
  - Sidebar: Navigation links (Dashboard, Profile, CV Boost, Interview)
  - Main Content:
    - Summary cards (Total Interviews, Average Score, CV status)
    - Recent Activity Table
  - Footer (optional)
- **Wireframe Image:**  
  `![Dashboard Page Wireframe](path/to/dashboard.png)`

---

## 6. Profile Page (`/profile`) [Protected]
- **Purpose:** Display and edit user profile information.
- **Layout:**
  - User Info Form: Name, Email, Role
  - Edit / Save buttons
  - Profile picture (optional)
- **Wireframe Image:**  
  `![Profile Page Wireframe](path/to/profile.png)`

---

## 7. CV Boost Page (`/cv-boost`) [Protected]
- **Purpose:** Upload CVs, analyze content, extract text.
- **Layout:**
  - Upload Section:
    - File input (PDF/DOC)
    - Upload Button
    - Status / Success message
  - Extract Text Section:
    - Button to extract CV text
    - Display extracted text
- **Wireframe Image:**  
  `![CV Boost Page Wireframe](path/to/cv-boost.png)`

---

## 8. Navigation & Common UI Elements
- **Navbar:** Links to all routes; highlights current page
- **Sidebar:** Shown on protected pages; links to Dashboard, Profile, CV Boost, Interview
- **Buttons:** Standardized style for Submit, Save, Upload, Next
- **Forms:** Styled consistently (inputs, textareas, file uploads)
- **Feedback UI:** Toasts or bubbles for success/error messages
- **Footer:** Consistent across all pages — uses a centered `max-w-7xl mx-auto px-6` inner container so width, padding, and vertical spacing match the Home page. Footer also uses `mt-auto` (when parent is a flex column) to ensure it sits at the bottom of the viewport on short pages.

---

*Notes:*  
- Place screenshots or sketches of each page in the paths indicated above.  
- This wireframe document aligns with the current React `Routes` and `ProtectedRoute` setup.
