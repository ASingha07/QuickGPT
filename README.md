# QuickGPT

A modern AI-powered chat application built with React and Node.js, featuring text generation, image generation, and a sleek dark/light theme interface.

## 🚀 Features

- **AI Text Generation**: Chat with advanced AI models powered by Gemini
- **AI Image Generation**: Generate stunning images from text prompts using ImageKit
- **User Authentication**: Secure login and registration system
- **Credit System**: Pay-per-use model with Stripe integration
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Real-time Chat**: Instant messaging with typewriter effects
- **Community Gallery**: Share and view published AI-generated images
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Markdown** - Markdown rendering
- **Prism.js** - Code syntax highlighting
- **Moment.js** - Date formatting

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** with **Mongoose** - Database
- **JWT** - Authentication
- **Stripe** - Payment processing
- **ImageKit** - Image generation and storage
- **OpenAI/Gemini API** - AI text generation
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
QuickGPT/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   └── assets/         # Static assets and images
│   └── public/             # Public static files
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route handlers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middlewares/        # Custom middleware
│   └── config/             # Configuration files
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Stripe account for payments
- ImageKit account for image generation
- OpenAI/Gemini API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ASingha07/QuickGPT.git
   cd QuickGPT
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the server directory:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   GEMINI_API_KEY=your_gemini_api_key
   ```

3. **Setup Frontend**

   ```bash
   cd ../client
   npm install
   ```

   Create a `.env` file in the client directory:

   ```env
   VITE_SERVER_URL=http://localhost:3000
   ```

4. **Run the Application**

   Start the backend server:

   ```bash
   cd server
   npm run server
   ```

   Start the frontend development server:

   ```bash
   cd client
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 💳 Credit Plans

- **Basic Plan**: $10 - 100 text generations, 50 image generations
- **Pro Plan**: $20 - 500 text generations, 200 image generations
- **Premium Plan**: $30 - 1000 text generations, 500 image generations

## 🔧 API Endpoints

### Authentication

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/data` - Get user profile

### Chat Management

- `GET /api/chat/create` - Create new chat
- `GET /api/chat/get` - Get user's chats
- `POST /api/chat/delete` - Delete a chat

### Messaging

- `POST /api/message/text` - Send text message
- `POST /api/message/image` - Generate image

### Credits

- `GET /api/credit/plan` - Get available plans
- `POST /api/credit/purchase` - Purchase credits

### Webhooks

- `POST /api/stripe` - Stripe payment webhook

## 🎨 Features in Detail

### AI Chat Interface

- Real-time messaging with AI
- Typewriter effect for new responses
- Markdown support with syntax highlighting
- Image generation with custom prompts

### User Management

- Secure authentication with JWT
- Password hashing with bcrypt
- Protected routes and middleware

### Payment System

- Stripe integration for secure payments
- Credit-based usage model
- Automatic credit updates via webhooks

### Theme System

- Dark and light mode support
- Persistent theme preferences
- Smooth theme transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Atin Singha** - [@ASingha07](https://github.com/ASingha07)

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- ImageKit for image generation
- Stripe for payment processing
- All the amazing open-source libraries used in this project

---

⭐ **Star this repository if you found it helpful!**
