import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author } = news;
    return (
        <div>
            <div className="p-6 overflow-hidden rounded-lg shadow">
                <article className='space-y-3'>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <img className='w-full' src={image_url} alt="" />
                    {
                        details.length > 200 
                        ? 
                        <p className="mt-4 text-gray-400 ">{details.slice(0, 200)} <Link to={`news/${_id}`}>See More</Link></p> 
                        : 
                        <p className="mt-4 text-gray-400 ">{details}</p>
                    }
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={author.img} alt="" className="w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time className="text-sm text-gray-400 ">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsCard;