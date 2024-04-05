import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../authProvider/Provider";


const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const handleCreateUser = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email'); 
        const password = form.get('password'); 

        createUser(email, password)
        .then(res => console.log(res))
        .catch(error => console.log(error))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl  text-gray-900">
                <h1 className="text-2xl font-bold text-center">Registration</h1>
                <form onSubmit={handleCreateUser} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block ">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block ">Email</label>
                        <input type="email" name="email" id="email" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block ">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                        <div className="flex justify-end text-xs ">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center cursor-pointer rounded-sm text-gray-900 bg-violet-400">Sign up</button>
                </form>
                
                
                <p className="text-center sm:px-6 text-gray-400 text-lg">Already have an account?
                    <Link to={'/login'} className="underline ">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;