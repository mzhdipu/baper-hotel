import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Test from "../../Pages/Home/Test";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/test',
                element: <Test></Test>
            }
        ]
    }
])