import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import Register from './Students/Register.jsx';
import WardenRegister from "./Warden/WardenRegister.jsx"
import ComplaintForm from './Students/ComplaintForm.jsx';
import Header from './Pages/Header.jsx'
import Footer from './Pages/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Signup from './Pages/Signup.jsx'
import SignOut from './Pages/SignOut.jsx'
import StudentProfile from "./Student/StudentProfile.jsx"
import WardenProfile from './Warden/WardenProfile.jsx';
import VerifyComplaints from './Warden/VerifyComplaints.jsx';
import NotificationSystem from './Warden/NotificationSystem.jsx';
import NavigationTest from './Warden/NotificationTest.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import RootLayout from './Components/RootLayout.jsx'
import { UserProvider } from '../src/Context/UserContext.jsx'

const browserRouterObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "debug",
        element: <NavigationTest />
      },
      {
        path: "signup",
        element: <Signup />,
        children: [
          {
            path: "register",
            element: <Register />
          },
          {
            path: "warden-register",
            element: <WardenRegister />
          }
        ]
      },
      {
        path: "signout",
        element: <SignOut />
      },
      // Student routes
      {
        path: "student-profile/:studentId",
        element: <StudentProfile />
      },
      {
        path: "student-profile/:studentId/complaint-form",
        element: <ComplaintForm />
      },
      {
        path: "student-profile/:studentId/notifications",
        element: <NotificationSystem />
      },
      // Warden routes
      {
        path: "warden-profile/:wardenId",
        element: <WardenProfile />
      },
      {
        path: "warden-profile/:wardenId/verify-complaints",
        element: <VerifyComplaints />
      },
      {
        path: "warden-profile/:wardenId/notifications",
        element: <NotificationSystem />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider
        router={browserRouterObj}
        future={{
          v7_relativeSplatPath: true,
        }}
      />
    </UserProvider>
  </StrictMode>,
)