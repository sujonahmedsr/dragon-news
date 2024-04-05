import { FaFacebookF, FaGithub } from "react-icons/fa";
import qZone1 from '../../src/assets/qZone1.png'
import qZone2 from '../../src/assets/qZone2.png'
import qZone3 from '../../src/assets/qZone3.png'

const RightNewsBar = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className="flex flex-col space-y-2 py-3 border-2 border-gray-200">
                <button className="py-3 bg-transparent cursor-pointer"><FaFacebookF></FaFacebookF> Login With Google</button>
                <button className="py-3 bg-transparent cursor-pointer"><FaGithub></FaGithub>Login With Github</button>
            </div>
            <div className="border">
                <h2>Q-Zone</h2>
                <div className="space-y-2 py-3 border-2 border-gray-200 rounded-xl">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNewsBar;