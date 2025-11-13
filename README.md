# Code Genie
1. Project Title
CodeGenie – Smart AI Code Assistant for Developers
 
2. Problem Statement
Developers often struggle with debugging, optimizing, and understanding code — especially across multiple languages and complex algorithms.
CodeGenie solves this problem by providing an AI-powered web platform that helps developers write, debug, and optimize code in real-time while tracking their learning progress and coding patterns.
It also gives users personalized insights, easy access to their past code, and an interactive dashboard — combining AI assistance, code management, and intelligent analytics in one place.
 
3. System Architecture
Flow:
Frontend → Backend (API) → Database → AI Engine (OpenAI or Custom ML model)
Description:
•	Frontend: React.js + React Router for page navigation, Axios for API calls, and TailwindCSS for styling.
•	Backend: Node.js + Express.js managing all API routes for authentication, code CRUD, and AI communication.
•	Database: MySQL with Prisma ORM for storing users, code snippets, and analytics data.
•	AI Layer: Python-based service or OpenAI API integration for code analysis, debugging, and explanation.
•	Authentication: JWT-based secure login/signup.
•	Hosting:
o	Frontend: Vercel / Netlify
o	Backend: Render / Railway
o	Database: PlanetScale / Aiven MySQL
System Diagram (text format):
[React Frontend]
  ↓ (Axios Requests)
[Node.js + Express API]
  ↓ (Prisma ORM)
[MySQL Database]
  ↳ [AI Engine - OpenAI/Python Service]
4. Key Features
Category
Features
Authentication & Authorization	User registration, login, logout using JWT; role-based access (user/admin).
Code Management (CRUD)	Create, Read, Update, Delete code snippets. Each snippet is linked to a user and stored in MySQL using Prisma ORM.
AI-Powered Code Analysis	Detect syntax errors, explain code logic, and provide improvement suggestions.
AI-Based Optimization Engine	Suggest better algorithms or data structures based on time/space complexity.
Multi-Language Support	Supports Python, C++, and JavaScript with syntax highlighting and auto-detection.
Search, Sort, Filter, and Pagination	On the “Code History” page: users can search code by title/language, filter by date or type, sort by performance or recency, and paginate through results dynamically.
Dynamic Data Fetching
All user dashboards, AI results, and code history pages use live API fetching and auto-refresh for real-time updates. 
User Dashboard	Displays recent activities, code performance analytics, and improvement insights (visualized using charts).
AI Chat Assistant
Conversational AI interface for debugging help, code explanations, or algorithmic Q&A.
Frontend Routing
Pages: Home, Login, Register, Dashboard, Code Editor, Code History, Profile. 
Hosting	Full-stack deployment — accessible via public URLs for internship demo.




5. Tech Stack
Layer	Technologies
Frontend	React.js, React Router, Axios, TailwindCSS
Backend	Node.js, Express.js
Database	MySQL with Prisma ORM
Authentication	JWT / OAuth
AI Integration	OpenAI API (or custom ML model with Pandas & Transformers)
Analytics	Pandas (Python microservice) + Chart.js (frontend)
Hosting	Frontend: Vercel / Netlify
Backend: Render / Railway
Database: PlanetScale / Aiven
6. API Overview
Endpoint	Method	Description	Access
/api/auth/signup	POST	Register a new user	Public
/api/auth/login	POST	Authenticate user and return JWT	Public
/api/user/profile	GET	Fetch user details and stats	Authenticated
/api/code	POST	Create a new code snippet	Authenticated
/api/code	GET	Get all code snippets with search, filter, sort, and pagination support	Authenticated
/api/code/:id	GET	Retrieve a specific code snippet	Authenticated
/api/code/:id	PUT	Update an existing code snippet	Authenticated
/api/code/:id	DELETE	Delete a code snippet	Authenticated
/api/ai/analyze	POST	Analyze and debug the code using AI	Authenticated
/api/ai/optimize	POST	Get optimization and complexity suggestions	Authenticated
/api/ai/chat	POST	Chat with the AI assistant for Q&A or help	Authenticated


<img width="451" height="686" alt="image" src="https://github.com/user-attachments/assets/1ef6d984-1b90-475d-81a6-86f18a6609a9" />
