# 🌐 User Management & Product API

A **Node.js** backend API for user and product management, built with **Express.js**, **MongoDB**, and **Multer** for file uploads.  
Includes **JWT authentication**, role-based authorization (admin/user), profile management, and admin-controlled shopping cart functionality.

---

## 📌 Features

- 📝 User Registration & Login
- 👤 Profile Management (update user info)
- 🛡 Role Management (admin/user)
- 📦 Product Management (admin only)
- 🛒 Shopping Cart Management (admin only)
- 📂 File Uploads via Multer
- 🔑 JWT-based Authentication & Authorization
- 🔒 Password Hashing with Bcrypt

---

## 🛠 Tech Stack

| Tool                   | Purpose          |
| ---------------------- | ---------------- |
| ⚡ Express.js          | Web framework    |
| 🗄 Mongoose             | MongoDB ORM      |
| 📁 Multer              | File uploads     |
| 🔑 Bcrypt              | Password hashing |
| 🪪 JSON Web Token (JWT) | Authentication   |

---

## 📂 Project Structure

```bash
backend/               # Server-side code
│── controllers/       # API request handlers
│── models/            # Mongoose schemas & models (User, Product, etc.)
│── middlewares/       # Authentication & authorization
│── routes/            # API route definitions
│── connection/        # Database connection setup
│── uploads/           # Uploaded files
```

---

## 📡 API Endpoints

| Method    | Endpoint      | Description                       |
| --------- | ------------- | --------------------------------- |
| 🟢 POST   | /user         | Create a new user                 |
| 🔵 GET    | /allusers     | Get all users                     |
| 🔵 GET    | /user/\:id    | Get user by ID                    |
| 🟡 PATCH  | /user/profile | Update current user profile       |
| 🟡 PATCH  | /user/\:id    | Update user by ID (admin only)    |
| 🔴 DELETE | /user/\:id    | Delete a user (admin only)        |
| 🟢 POST   | /login        | Login & get JWT                   |
| 🟢 POST   | /shop         | Create a new product (admin only) |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/unkmitm/user-management-api.git
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
JWT_LIFETIME = 5d
```

### 4️⃣ Run the server

```bash
npm start
```

Server will run on:  
🌍 http://localhost:3000

---

## 📜 License

This project is licensed under the MIT License – you are free to use, modify, and distribute it.

```
MIT License

Copyright (c) 2025 Ehsan

```
