import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
    const [news, setNews] = useState([])
    const allNews = useLoaderData()
    const {id} = useParams()
    useEffect(()=>{
        const singleNews = allNews.find(sNews =>sNews._id === id)
        console.log(singleNews)
    },[allNews, id])
    return (
        <div>
            <h2 className="text-3xl">this is okk</h2>
        </div>
    );
};

export default NewsDetails;