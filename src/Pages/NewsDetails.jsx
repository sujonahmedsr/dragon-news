import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import WebHeader from "../components/WebHeader";
import NewsMar from "./NewsMar";
import RightNewsBar from "./RightNewsBar";

const NewsDetails = () => {
    const {id} = useParams();
    const news = useLoaderData();
    const newsDetails = news.find(n => n._id === id);
    const {title, image_url, details} = newsDetails;


    return (
        <div>
            <WebHeader></WebHeader>
            <NewsMar></NewsMar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1>News Details</h1>
                    <div className="p-6 overflow-hidden rounded-lg shadow">
                        <article className='space-y-3'>
                            <h2 className="text-xl font-bold">{title}</h2>
                            <img className='w-full' src={image_url} alt="" />
                            {

                                <p className="mt-4 text-gray-400 ">{details}</p>
                            }
                            <div className="flex items-center mt-8 space-x-4">
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-500" />
                                <div>
                                    <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                                    <time className="text-sm text-gray-400 ">Feb 18th 2021</time>
                                </div>
                            </div>
                        </article>
                    </div>
                    <Link to={'/'}><button>Back to see all news</button></Link>
                </div>
                <div className="col-span-1">
                    <RightNewsBar></RightNewsBar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;