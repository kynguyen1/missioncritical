import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Layout from './components/Layout'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'  // ✅ Import the Register Page
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Leaderboard from './components/Leaderboard'
import PastData from './components/PastData'
import WorkoutInput from './components/WorkoutInput'
import ProtectedRoute from './components/ProtectedRoute'

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> }, // Public Route: Home
      { path: '/login', element: <LoginPage /> }, // Public Route: Login Page
      { path: '/register', element: <RegisterPage /> }, // ✅ New Public Route: Register Page

      {
        element: <ProtectedRoute />, // Protect Dashboard, Profile, and Leaderboard
        children: [
          { path: '/dashboard', element: <Dashboard /> }, // Protected Route: Dashboard
          { path: '/profile', element: <Profile /> }, // Protected Route: Profile Page
          { path: '/leaderboard', element: <Leaderboard /> },
          { path: '/pastdata', element: <PastData /> },
          { path: '/workoutinput', element: <WorkoutInput /> },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
