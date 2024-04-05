import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

const News = () => {
	const [allNews, setAllNews] = useState([])
	useEffect(()=>{
		fetch('news.json')
		.then(res => res.json())
		.then(data => setAllNews(data))
	},[])
  return (
    <div>
		{
			allNews.map(newse =><SingleNews key={newse._id} newse = {newse}></SingleNews>)
		}
	</div>
  );
};

export default News;
