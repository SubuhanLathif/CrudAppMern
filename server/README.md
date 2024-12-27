## Crud Application - MERN Project

This folder contains the backend (server-side) logic for the **CrudAppMern** project, which is built using **Node.js**, **Express**, and **MongoDB**. It provides a RESTful API to handle CRUD operations for student records.

### Project Structure (MVC Design)

```plaintextt
server/
  ├── controllers/
  │   └── controllers.js         # Contains logic for handling API requests
  ├── models/
  │   └── models.js              # Contains Mongoose schemas for database models
  ├── routes/
  │   └── routes.js              # Contains API route definitions and controllers mapping
  ├── .env                       # Environment variables, including sensitive data (not pushed to Git)
  ├── server.js                  # Main server setup and configuration
  └── package.json               # Project dependencies and scripts
```

### Features  

**1) Input Validations** : Ensures the correctness of user inputs before saving to the database.

**2) Default Values** : Provides a default profile photo URL (https://placehold.co/80x80&text=No+Photo) if no photo is uploaded.

**3) Error Handling** : Duplicate email errors & Invalid or missing request parameters.

**4) RESTful Design** : Clean and well-structured API endpoints for easy integration with the frontend.

### Setup and Installation

To run this Crud Application - Using Node & MongoDB project locally, follow these steps :

**Note : Create an free account in mongodb atlas (cloud db) if needed or either use mongodb compass.**

1) Clone the repository to your local machine or download the code.
2) Navigate to the server directory and Install dependencies using npm install or yarn install.
3) Create .env file in server root folder.
4) In .env file, # MONGO_URI=your-mongodb-atlas-connection-string and PORT (reference sample.env file).
5) Start the development server using npm run dev or yarn dev.
6) You have see the message if the server started successfully,
   **Server is running on {your PORT}**
   **Connected to MongoDB**
7) Then Test the apis using postman or any other you familiar with.

### Technologies Used

1) Node.js : JavaScript runtime for building the server.
2) Express : Web framework for handling routing and middleware.
3) MongoDB & Mongoose : Database and ODM (Object Data Modeling) library to interact with MongoDB.
4) dotenv : Manages environment variables.
5) Cors : CORS enables secure communication between applications hosted on different origins

### Youtube Video Link
Language Tamil - https://youtu.be/0BRC_6_0zVU?si=NNTNBGxBA9X67WRd 