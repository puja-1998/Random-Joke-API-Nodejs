# 😂 Random Jokes API

A simple RESTful API built with **Node.js** and **Express.js** that serves random jokes. Perfect for learning how to handle data, create API endpoints, and test backend logic.

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/random-jokes-api.git
cd random-jokes-api

### 2. Install Dependencies

```bash
npm install

### 3. Start the Server

- For normal start:
```bash
npm start

- For development with auto-reload (using nodemon):
```bash
npm run dev

### Server will run at:
http://localhost:3000

### 📚 Available Endpoints

Method	Endpoint	Description
GET	/	Welcome message
GET	/api/jokes	Returns all jokes in the database
GET	/api/jokes/random	Returns a random joke
GET	/api/jokes/:id	Returns joke by ID (0-based)

### 📂 Project Structure

```bash
random-jokes-api/
├── jokes.json        # Array of 10+ jokes
├── index.js         # Express server with API routes
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation


