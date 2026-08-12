# SDG Project

## 📌 About the Project

**SDG Project** is a full-stack web application developed to support the project's Sustainable Development Goal (SDG) objectives through a modern frontend and backend architecture.

The project is organized into two major components:

* **Frontend** – provides the user interface and user interaction.
* **Backend** – provides the server, API endpoints, request handling, and application logic.

The repository follows a modular structure that separates the client-side interface from server-side functionality, making the project easier to develop, maintain, and extend.

## 🛠️ Technology Stack

### Frontend

The frontend is maintained separately inside the `frontend` directory.

> **Note:** The exact frontend framework and dependencies should be documented from `frontend/package.json`. The current public repository structure confirms the presence of the frontend directory, but its package configuration was not available through the repository page at the time of documentation.

### Backend

The backend is built using:

* **Node.js** – JavaScript runtime
* **Express.js** – web application framework
* **CORS** – handles cross-origin requests
* **dotenv** – manages environment variables
* **JavaScript** – backend programming language
* **npm** – package and dependency management

The backend `package.json` currently lists Express, CORS, and dotenv as dependencies.

## 📂 Project Structure

```text
sdgProject/
│
├── backend/
│   ├── models/
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│
└── .gitignore
```

The repository currently contains separate `backend` and `frontend` directories.

### Backend Files

#### `backend/server.js`

This is the main entry point of the backend.

It:

* Imports Express and CORS.
* Creates the Express application.
* Enables JSON request parsing.
* Configures CORS.
* Defines the root endpoint.
* Starts the server.

The current root endpoint responds with:

```text
Backend is running!
```

The server uses port `5000` by default, while also allowing the port to be supplied through the `PORT` environment variable.

#### `backend/routes/`

This directory contains API route definitions.

Currently, it contains:

```text
routes/
└── auth.js
```

The `auth.js` file is intended for authentication-related API routes.

#### `backend/models/`

This directory contains backend data models and is intended to keep the application's data-related structures separate from its routes and server configuration.

#### `backend/.env`

Stores environment-specific configuration and secrets.

Sensitive values such as API keys, credentials, and environment-specific configuration should **not be committed to GitHub**.

#### `backend/package.json`

Defines the backend project configuration and dependencies.

Current dependencies include:

```text
express
cors
dotenv
```

The backend is therefore a lightweight Node.js + Express server rather than a Spring Boot application.

## 🔗 Frontend ↔ Backend Connection

The application follows a client-server architecture:

```text
┌─────────────────────┐
│      FRONTEND       │
│                     │
│   User Interface    │
└──────────┬──────────┘
           │
           │ HTTP Requests
           ▼
┌─────────────────────┐
│       BACKEND       │
│                     │
│   Node.js + Express │
└──────────┬──────────┘
           │
           │
           ▼
      Application
        Logic
```

The frontend communicates with the Express backend through HTTP/API requests.

The backend is configured to accept requests from specified frontend origins using CORS. The current server configuration includes a local development origin and a deployed Vercel frontend origin.

## ▶️ How to Run the Project

### Prerequisites

Install:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/sakshiiiip/sdgProject.git
cd sdgProject
```

### 2. Start the Backend

Open a terminal:

```bash
cd backend
npm install
node server.js
```

The backend should start on:

```text
http://localhost:5000
```

You can test it by opening:

```text
http://localhost:5000
```

A successful response should display:

```text
Backend is running!
```

The current server implementation uses `process.env.PORT || 5000`.

### 3. Start the Frontend

Open a **second terminal**:

```bash
cd frontend
npm install
```

Then use the development command defined in the frontend's `package.json`:

```bash
npm run dev
```

> The exact frontend start command should be confirmed from `frontend/package.json`.

## 👥 Team Development

The project is divided into frontend and backend responsibilities so that team members can work independently while communicating through APIs.

### Frontend Team

Responsible for:

* User interface
* Pages and components
* User interactions
* API integration
* Responsive design
* Frontend validation

### Backend Team

Responsible for:

* Express server
* API endpoints
* Authentication
* Application logic
* Data models
* Server-side validation
* Environment configuration

### Integration

Frontend and backend developers coordinate through clearly defined API endpoints and request/response formats.

## 👨‍💻 What a Team Member Should Work On

A team member can contribute by taking ownership of a specific module rather than modifying the entire application.

Typical responsibilities include:

1. **Frontend development**

   * Create or modify UI components.
   * Connect screens to backend APIs.
   * Handle loading and error states.
   * Improve accessibility and responsiveness.

2. **Backend development**

   * Create API routes.
   * Implement authentication.
   * Add validation.
   * Connect application logic to models.

3. **Integration**

   * Connect frontend forms/buttons to backend endpoints.
   * Test API requests.
   * Handle API responses and errors.

4. **Testing and debugging**

   * Test individual features.
   * Verify frontend-backend communication.
   * Fix bugs without breaking other modules.

## 📚 What You Need to Learn

### If working mainly on the frontend

Learn:

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Frontend framework used by the project
 ↓
Components
 ↓
State management
 ↓
HTTP / REST APIs
 ↓
Axios or Fetch
 ↓
Git & GitHub
```

### If working mainly on the backend

Learn:

```text
JavaScript
 ↓
Node.js
 ↓
Express.js
 ↓
REST APIs
 ↓
Middleware
 ↓
Routing
 ↓
Authentication
 ↓
Database / Models
 ↓
Environment variables
 ↓
Git & GitHub
```

### If working on integration

Focus especially on:

```text
Frontend
    │
    │ GET / POST / PUT / DELETE
    ▼
Express API
    │
    ▼
Backend Logic
    │
    ▼
Response
    │
    ▼
Frontend UI
```

## 🔐 Security

Environment variables should be used for sensitive configuration.

Do not commit:

* API keys
* Passwords
* Database credentials
* Authentication secrets
* Private tokens

The backend already includes a `.env` file in its project structure, so ensure that sensitive environment configuration is excluded from version control through `.gitignore`.

## 🚀 Future Scope

The project can be extended by:

* Adding more application modules.
* Expanding authentication and authorization.
* Adding database-backed functionality.
* Improving frontend accessibility.
* Adding more APIs and integrations.
* Deploying the frontend and backend independently.
* Adding automated testing and CI/CD.

## 🤝 Contribution Workflow

For team development, use Git branches rather than directly making unrelated changes on `main`.

A typical workflow is:

```bash
git pull
git checkout -b feature/your-feature
```

After completing your work:

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

Then create a Pull Request for review.

This branch-and-pull-request workflow allows team members to work on features independently and have changes reviewed before they are merged.

## 📄 License

This project currently uses the repository's existing licensing configuration. Check the repository before adding or changing license information.
