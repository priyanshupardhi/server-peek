import { createBrowserRouter } from "react-router-dom";
import { SignUpForm } from "./pages/Register";
import { LoginForm } from "./pages/Login";
import HomePage from "@/pages/HomePage";
import Custom404 from "./pages/Error";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { StatsPage } from "./pages/StatsPage";



const router = createBrowserRouter([
    { 
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            { 
                path: 'register',
                element: <SignUpForm/>
            },
            { 
                path: 'login', 
                element: <LoginForm/> 
            },
        ],
    },
    
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: 'stats',
                element: <StatsPage/>
            },
        ],
    },
    
    {
        path: '/error',
        element: <Custom404 statusCode={0}/>
    }
  ]);

export default router;