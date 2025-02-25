# ProductivityPro

**ProductivityPro** is a powerful productivity tracking tool designed to help you stay organized, focused, and efficient. With features like a Pomodoro timer, habit tracker, and a heatmap calendar, ProductivityPro ensures you make the most out of your time.

## 🌐 Live Demo
[🔗 Visit ProductivityPro](https://productivity-app-pearl.vercel.app/)

## ✨ Features

- 🕒 **Pomodoro Timer** – Enhance focus with customizable work/break sessions.
- ✅ **Task Manager** – Organize tasks into To-Do, In Progress, and Done sections.
- 📅 **Heatmap Calendar** – Visualize your daily productivity trends.
- 📊 **Progress Tracking** – Track and analyze your work sessions.
- 🔒 **Secure Authentication** – Sign up and log in securely with JWT authentication.

## 📦 Tech Stack

- **Frontend:** React, Recoil, Tailwind CSS
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Vercel (Frontend), Render (Backend)

## 🛠 Installation & Setup

### Prerequisites
- Node.js (v16+)
- PostgreSQL (if running locally)

### Steps To Run It Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/adityasangani/productivity-app.git
   cd productivity-app
   ```

2. **Setup Backend**
   ```sh
   cd backend
   npm install
   cp .env.example .env  # Add your environment variables
   npx prisma migrate dev --name Initialize schema # Setup the database
   npx prisma generate
   node index.js
   ```

3. **Setup Frontend in Another Terminal**
   ```sh
   cd frontend
   npm install
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:5173
   ```


