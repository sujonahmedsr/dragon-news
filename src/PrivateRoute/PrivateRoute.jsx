import { useContext } from "react";
import { AuthContext } from "../authProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import { Audio } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center top-1/2 absolute text-center mx-auto border-2 border-red-600">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;