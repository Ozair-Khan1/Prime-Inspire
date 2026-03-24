import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { CartProvider } from './store/cartReducer.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Courses from './pages/Courses.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import { AuthProvider } from './backend/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
      index: true, 
      element: <Navigate to="/Home" replace />
      },
      {
        path : "Home",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Courses",
        element: <Courses />,
      },
    ],
  },  
  {
    path: "SignUp",
    element: <Signup />,
  },
  {
    path: "Login",
    element: <Login />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <CartProvider>
        <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
  </StrictMode>,
)
