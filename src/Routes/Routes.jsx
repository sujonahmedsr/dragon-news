import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import NewsDetails from "../Pages/NewsDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/news.json'),
        },
        {
            path: 'news/:id',
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch('/news.json'),
        },
        {
            path: '/Login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
    ]
}])

export default router;