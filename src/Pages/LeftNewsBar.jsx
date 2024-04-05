import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNewsBar = () => {
    const [Categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className="space-y-3 flex flex-col  py-5">
                {
                    Categories.map(category =>
                        <Link key={category.id} to={`category/${Categories.id}`} className="py-3 bg-gray-200 px-4 text-black">{category.name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNewsBar;