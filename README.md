# 💬 Babble Chat

A modern, real-time chat application built with the MERN stack. Connect with friends instantly and enjoy seamless conversations.

**🔗 Live Demo:** [babble-chat-app.onrender.com](https://babble-chat-app.onrender.com/)

![Babble Chat Demo](/frontend/public/screenshot-for-readme.png)

## ✨ Features

- **Real-time Messaging** - Instant chat with Socket.io
- **User Authentication** - Secure JWT-based auth system
- **Online Status** - See who's currently active
- **Modern UI** - Clean design with TailwindCSS & DaisyUI
- **File Sharing** - Send images and files up to 100MB
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Mode** - Theme support with DaisyUI

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.io
- **State Management:** Zustand
- **Authentication:** JWT
- **File Storage:** Cloudinary
- **Deployment:** Render

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for file uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/babble-chat.git
   cd babble-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   NODE_ENV=development
   ```

4. **Build and Start**
   ```bash
   npm run build
   npm start
   ```

The app will be available at `http://localhost:5001`

## 📱 Usage

1. **Sign Up** - Create your account with email and password
2. **Choose Avatar** - Pick from available avatars or upload your own
3. **Start Chatting** - Find friends and start conversations
4. **Share Files** - Send images and documents instantly
5. **Stay Connected** - See when friends are online

## 🎯 Key Features Explained

### Real-time Communication
Built with Socket.io for instant message delivery and live user status updates.

### Secure Authentication
JWT-based authentication system with password hashing and session management.

### File Sharing
Support for file uploads up to 100MB using Cloudinary for reliable storage and delivery.

### Modern UI/UX
Clean, intuitive interface with smooth animations and responsive design.

## 🔧 Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server
- `npm run build` - Build for production

### Project Structure
```
babble-chat/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── lib/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── lib/
│   └── public/
└── README.md
```

## 🌐 Deployment

The app is configured for easy deployment on platforms like Render, Vercel, or Heroku.

1. Set environment variables on your hosting platform
2. Configure build settings (already set up for Render)
3. Deploy directly from your repository
