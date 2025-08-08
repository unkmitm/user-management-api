
# 🌐 User Management API

A **Node.js** backend API for user management, built with **Express.js**, **MongoDB**, and **Multer** for file uploads.  
Includes **JWT authentication**, role-based authorization, and profile management.

---

## 📌 Features
- 📝 User Registration & Login
- 👤 Profile Management (update user info)
- 🛡 Role Management (admin/user)
- 📂 File Uploads via Multer
- 🔑 JWT-based Authentication & Authorization
- 🔒 Password Hashing with Bcrypt

---

## 🛠 Tech Stack
| Tool | Purpose |
|------|---------|
| ⚡ Express.js | Web framework |
| 🗄 Mongoose | MongoDB ORM |
| 📁 Multer | File uploads |
| 🔑 Bcrypt | Password hashing |
| 🪪 JSON Web Token (JWT) | Authentication |

---

## 📂 Project Structure
```bash
backend/               # Server-side code
│── controllers/       # API request handlers
│── models/            # Mongoose schemas & models
│── middlewares/       # Authentication & authorization
│── routes/            # API route definitions
│── connection/        # Database connection setup
│── uploads/           # Uploaded files
```

---

## 📡 API Endpoints

| Method | Endpoint   | Description            |
|--------|------------|------------------------|
| 🟢 POST   | /user      | Create a new user      |
| 🔵 GET    | /allusers  | Get all users          |
| 🔵 GET    | /user/:id  | Get user by ID         |
| 🟡 PATCH  | /user/:id  | Update user profile    |
| 🔴 DELETE | /user/:id  | Delete a user          |
| 🟢 POST   | /login     | Login & get JWT        |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/unkmitm/user-management-api.git
cd user-management-api
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
JWT_LIFETIME = 1d
```

### 4️⃣ Run the server
```bash
node server.js or add start script in package.json
```

Server will run on:  
🌍 http://localhost:3000

---

## 📜 License
This project is licensed under the MIT License – you are free to use, modify, and distribute it.

```
MIT License

Copyright (c) 2025 Ehsan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

```
