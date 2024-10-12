import './App.css'
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
      <SignUpForm />
    </ThemeProvider>
  )
}

export default App

