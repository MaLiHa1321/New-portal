import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                
            }
        ]
    }
])