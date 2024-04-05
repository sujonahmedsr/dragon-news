import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const NewsMar = () => {
    return (
        <div className="flex items-center">
            <button className="btn bg-[#D72050] hover:text-black text-white">Latest News</button>
            <Marquee speed={100} pauseOnHover={true}>
                <Link className="mr-4 text-red-600">I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mr-4 text-red-600">I can be a React component, multiple React components, or just some text...</Link>
                <Link className="mr-4 text-red-600">I can be a React component, multiple React components, or just some text...</Link>
            </Marquee>
        </div>
    );
};

export default NewsMar;