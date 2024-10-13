import './App.css'
import Dashboard from './pages/Dashboard'
import { LoginForm } from './pages/Login'
import { SignUpForm } from './pages/Register'
import { ThemeProvider } from "@/components/theme-provider"
import { createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: '/register', element: <SignUpForm /> },
    { path: '/login', element: <LoginForm/> }
  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  )
}

export default App

