import { createBrowserRouter } from "react-router-dom";
import { SignUpForm } from "./pages/Register";
import { LoginForm } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Custom404 from "./pages/Error";


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
    },
    {
        path: '/error',
        element: <Custom404 statusCode={0}/>
    }
  ]);

export default router;