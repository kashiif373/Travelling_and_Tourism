# 🌍 Travelling and Tourism

A modern, full-stack travel booking platform built with React, Node.js, and MongoDB. Discover amazing destinations, book tours, and manage your travel experiences all in one place.



## ✨ Features

### 🎯 Core Features
- **🔍 Advanced Search & Filtering** - Find tours by destination, price, duration, and more
- **📱 Responsive Design** - Works perfectly on all devices
- **🔐 Secure Authentication** - JWT-based user authentication
- **💳 Booking System** - Complete booking flow with payment integration
- **⭐ Review & Rating System** - Share your travel experiences
- **👤 User Dashboard** - Manage bookings and profile
- **🛡️ Admin Panel** - Full admin controls for tour management

### 🎨 Frontend Features
- **Modern UI/UX** - Built with React and Tailwind CSS
- **Interactive Maps** - Visual tour locations
- **Image Gallery** - Beautiful tour showcases
- **Real-time Updates** - Live booking availability
- **Mobile-First Design** - Optimized for mobile users

### ⚙️ Backend Features
- **RESTful API** - Clean and scalable API design
- **MongoDB Database** - Flexible and scalable data storage
- **Email Notifications** - Automated booking confirmations
- **File Upload** - Tour image management
- **Role-based Access** - User and admin permissions

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **Nodemailer** - Email service

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📸 Screenshots

### Home Page
 
<img width="1901" height="895" alt="image" src="https://github.com/user-attachments/assets/9025a8b3-a0a2-488c-9d56-db50880df910" />


### Tour Details

<img width="1899" height="897" alt="image" src="https://github.com/user-attachments/assets/26084875-4618-4a48-aa76-0e1064ddfe01" />


### Booking Flow

<img width="1902" height="890" alt="image" src="https://github.com/user-attachments/assets/837cf39d-72ae-42a4-965b-92830b9ab864" />


### Admin Dashboard

<img width="1898" height="892" alt="image" src="https://github.com/user-attachments/assets/1ae7319a-a09e-4204-8c21-be314a1eeac7" />


## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
  

### Clone the Repository
```bash
git clone https://github.com/yourusername/travelling-and-tourism.git
cd travelling-and-tourism
```

### Frontend Setup
```bash
cd frontend
npm install
```

### Backend Setup
```bash
cd backend
npm install
```

### Environment Variables

Create `.env` files in both frontend and backend directories:

#### Backend `.env`
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

#### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000/api
```

### Start Development Servers

#### Start Backend
```bash
cd backend
npm run dev
```

#### Start Frontend
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📁 Project Structure

```
travelling-and-tourism/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── assets/        # Images and static files
│   │   └── styles/        # Global styles
│   ├── public/            # Public assets
│   └── package.json
├── backend/
│   ├── controllers/       # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout



## 🎯 Usage

### For Travelers
1. **Browse Tours** - Explore available tours on the home page
2. **Search & Filter** - Use advanced search to find perfect tours
3. **Book Tours** - Complete booking with secure payment
4. **Manage Bookings** - View and manage bookings in user dashboard
5. **Leave Reviews** - Share your travel experiences



.

## 👥 Team

- **Your Name** - Initial work - [YourGitHub](https://github.com/kashiif373/Travelling_and_Tourism)

## 🙏 Acknowledgments

- React community for amazing tools
- Tailwind CSS team for the styling framework
- MongoDB for the database solution
- All contributors and testers

## 📞 Support

For support, email kashif.mukhtar950@gmail.com .

---

<div align="center">
  <p>⭐ Don't forget to star this repository if you find it helpful! ⭐</p>
  <p>Made with ❤️ by the Travelling and Tourism Team</p>
</div>
