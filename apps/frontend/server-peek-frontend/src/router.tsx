import { createBrowserRouter } from "react-router-dom";
import { SignUpForm } from "./pages/Register";
import { LoginForm } from "./pages/Login";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
    { 
        path: '/register',
        element: <SignUpForm/>
    },
    { 
        path: '/login', 
        element: <LoginForm/> 
    },
    {
        path: '/dashbaord',
        element: <Dashboard/>
    }
  ]);

export default router;