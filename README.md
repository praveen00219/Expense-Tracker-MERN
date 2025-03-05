# Expense Tracker Application

![Expense Tracker](https://img.shields.io/badge/React-18.2.0-blue) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple) ![Node.js](https://img.shields.io/badge/Node.js-16.x-green) ![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

The **Expense Tracker Application** is a full-stack web application that allows users to track their expenses, categorize them, and view summaries. It features user authentication, expense management, and a dashboard with visualizations.

---

## Features

- **User Authentication**:

  - Signup with email confirmation.
  - Login and logout functionality.
  - JWT-based authentication.

- **Expense Management**:

  - Add, view, delete and categorize expenses.
  - Filter expenses by date or category.
  - Export expenses to a CSV file.

- **Dashboard**:

  - Visualize expenses using charts (e.g., bar charts, pie charts).
  - View total expenses and categorized breakdowns.

- **Email Notifications**:

  - Email confirmation on signup.
  - Weekly expense summaries sent to registered users.

- **Responsive Design**:
  - Mobile-friendly interface.

---

## Technologies Used

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive design and pre-built components.
- **Axios**: A promise-based HTTP client for making API calls.
- **Chart.js**: A JavaScript library for data visualization.

### Backend

- **Node.js**: A JavaScript runtime for building the backend.
- **Express.js**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **JWT**: JSON Web Tokens for user authentication.
- **Bcrypt**: A library for hashing passwords.
- **Nodemailer**: A library for sending emails.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/praveen00219/Expense-Tracker-MERN.git
cd expense-tracker
```

## Usage

### Signup:

-Visit the signup page (/signup).
-Enter your name, email, and password.
-Verify your email by clicking the link sent to your inbox.

### Login:

-Visit the login page (/login).
-Enter your email and password.
-You will be redirected to the dashboard upon successful login.

### Dashboard:

-View your total expenses and categorized breakdowns.
-Add new expenses using the expense form.
-Delete expenses by clicking on trash icon.
-Filter expenses by date or category.
-Export expenses to a CSV file.

### Logout:

Click the "Logout" button in the navbar to log out.

## API Endpoints

### Auth Routes

-POST /api/auth/signup: Create a new user.
-POST /api/auth/login: Authenticate user and return a JWT.
-POST /api/auth/logout: Log out the user (optional).

### Expense Routes

-POST: /api/v1/add-income: Add a new income.
-POST: /api/v1/add-expense: Add a new expense.
-GET: /api/v1/get-incomes: Get all incomes (with filters for date and category).
-GET: /api/v1/get-expenses: Get all expenses (with filters for date and category).
-DELETE: /api/v1/delete-income/:id: Delete an income.
-DELETE: /api/v1/delete-expense/:id: Delete an expense.

### User Registration Routes

-POST: /api/auth/signup
-POST: /api/auth/login
-POST: /api/auth/logout
