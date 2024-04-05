import Navbar from "../components/Navbar";
import WebHeader from "../components/WebHeader";
import LeftNewsBar from "./LeftNewsBar";
import NewsHome from "./NewsHome";
import NewsMar from "./NewsMar";
import RightNewsBar from "./RightNewsBar";

const Home = () => {
    return (
        <div className="font-poppins container mx-auto px-3">
            <WebHeader></WebHeader>
            <NewsMar></NewsMar>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1">
                    <LeftNewsBar></LeftNewsBar>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <NewsHome></NewsHome>
                </div>
                <div className="col-span-1">
                    <RightNewsBar></RightNewsBar>
                </div>
            </div>
        </div>
    );
};

export default Home;