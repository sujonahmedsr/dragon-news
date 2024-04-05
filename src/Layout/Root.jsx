import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto px-3">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;