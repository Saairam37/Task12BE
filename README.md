# 🔐 Password Reset Flow – Backend (Express.js)

This is the backend for the **Password Reset Flow** app built using **Node.js**, **Express.js**, and **MongoDB**. It handles user authentication features like registration, login, logout, and password reset via email with secure token validation.

---

## 📁 Project Structure

```
.
├── controllers/
│   └── authControllers.js
├── middleware/
│   └── auth.js
├── models/
│   └── user.js
├── routes/
│   └── authRouter.js
├── utils/
│   ├── config.js
│   ├── errorRoute.js
│   └── logger.js
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Features

- ✅ User Registration & Login  
- ✅ JWT-based Authentication  
- ✅ Secure Cookie Management  
- ✅ Password Reset via Email (with Token)  
- ✅ CORS Support for Frontend Integration  

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT**
- **Nodemailer**
- **Cookie-Parser**
- **CORS**

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Subramaniyajothi6/password-reset-backend.git
   cd password-reset-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** and add your environment variables:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/password-reset
   JWT_SECRET=your_jwt_secret_key
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Run the server**

   ```bash
   npm start
   ```

---

## 🌐 API Endpoints

All routes are prefixed with `/api/v1/auth`

| Method | Endpoint                         | Description                |
|--------|----------------------------------|----------------------------|
| POST   | `/register`                      | Register a new user        |
| POST   | `/login`                         | Log in and receive token   |
| POST   | `/logout`                        | Logout and clear cookie    |
| POST   | `/reset_password`                | Send reset link via email  |
| POST   | `/reset_password_confirm/:token` | Reset password with token  |

---

## 🚀 Deployment (Render)

1. Create a new **Web Service** on [Render](https://render.com/)
2. Connect your GitHub repository
3. Set the **Build Command**:

   ```bash
   npm install
   ```

4. Set the **Start Command**:

   ```bash
   npm start
   ```

5. Add environment variables under **Render > Environment** settings

---

## 🔐 CORS Setup

The backend allows requests from:

- `http://localhost:5173`
- `https://passwordreset-flow-frontend.netlify.app`

If your frontend is hosted elsewhere, update the `origin` array inside `app.js`.

---

## 📬 Email Setup (Nodemailer)

To enable password reset emails, configure Nodemailer with one of the following:

- **Gmail** (Requires an App Password)
- **Mailtrap** (For testing only)
- **Any SMTP Provider**

Update the `.env` file with:

```
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
```

---

## 👨‍💻 Author

Made with ❤️ by [Subramaniyajothi](https://github.com/Subramaniyajothi6)
