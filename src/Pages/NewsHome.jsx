import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const NewsHome = () => {
    const newses = useLoaderData();
    return (
        <div className="space-y-5">
            {
                newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default NewsHome;