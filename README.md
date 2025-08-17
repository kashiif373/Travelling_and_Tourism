# 🌍 Travelling and Tourism

A modern, full-stack travel booking platform built with React, Node.js, and MongoDB. Discover amazing destinations, book tours, and manage your travel experiences all in one place.

![Project Banner](frontend/src/assets/images/banner-01.jpg)

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
![Home Page](frontend/src/assets/images/hero-img01.jpg)

### Tour Details
![Tour Details](frontend/src/assets/images/tour-img01.jpg)

### Booking Flow
![Booking](frontend/src/assets/images/login.png)

### Admin Dashboard
![Admin Panel](frontend/src/assets/images/dashboard.png)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Git

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

### Tours
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get single tour
- `POST /api/tours` - Create tour (admin)
- `PUT /api/tours/:id` - Update tour (admin)
- `DELETE /api/tours/:id` - Delete tour (admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `DELETE /api/bookings/:id` - Cancel booking

### Reviews
- `GET /api/reviews/:tourId` - Get tour reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## 🎯 Usage

### For Travelers
1. **Browse Tours** - Explore available tours on the home page
2. **Search & Filter** - Use advanced search to find perfect tours
3. **Book Tours** - Complete booking with secure payment
4. **Manage Bookings** - View and manage bookings in user dashboard
5. **Leave Reviews** - Share your travel experiences

### For Admins
1. **Manage Tours** - Create, update, and delete tours
2. **View Bookings** - Monitor all bookings and payments
3. **User Management** - Manage user accounts and permissions
4. **Analytics** - View booking statistics and trends

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
cd frontend
npm run build
vercel --prod
```

### Backend Deployment (Render/Heroku)
```bash
cd backend
git add .
git commit -m "Deploy backend"
git push heroku main
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Your Name** - Initial work - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React community for amazing tools
- Tailwind CSS team for the styling framework
- MongoDB for the database solution
- All contributors and testers

## 📞 Support

For support, email support@travellingandtourism.com or join our Slack channel.

---

<div align="center">
  <p>⭐ Don't forget to star this repository if you find it helpful! ⭐</p>
  <p>Made with ❤️ by the Travelling and Tourism Team</p>
</div>
