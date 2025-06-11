# rest-api-checkpoint

---

This is a simple REST API built with Node.js, Express, and MongoDB (Mongoose) for basic user management.

## Features
- Connects to MongoDB (local or Atlas)
- Four API Routes:
  - `GET /users` → Retrieve all users
  - `POST /users` → Add a new user
  - `PUT /users/:id` → Update a user by ID
  - `DELETE /users/:id` → Delete a user by ID

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Getting Started

1. Clone the repository:
```bash
   git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables in config/.env:

PORT=5000
MONGO_URI=mongodb://localhost:27017/userdb

4. Run the server:
```bash
node server.js
```
5. Test the API using Postman.

## Notes
- Don't forget to add your .env file (it is excluded from the repository with .gitignore).

- All API endpoints have been tested and are working properly.
