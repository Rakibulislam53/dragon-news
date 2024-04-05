import { FaBookmark, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleNews = ({newse}) => {
    const {rating, author, title,total_view,thumbnail_url, image_url} = newse
    return (
        <Link to={`/newsdetails/${newse._id}`}>
            <div className="flex  flex-col  space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        
		<div className="flex justify-between items-center bg-base-200 p-4 space-x-4">
          <div className="flex gap-3 space-y-1">
            <img
              alt=""
              src={author.img}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />

            <div className="flex flex-col">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
               {author.name}
              </a>
              <span className="text-xs dark:text-gray-600">{author.published_date}</span>
            </div>
          </div>
          <div className="flex text-xl">
            <FaBookmark></FaBookmark>
            <CiShare2 />
          </div>
        </div>
		
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
           {title}
          </h2>
          <img
            src={image_url}
            alt=""
            className="rounded-lg object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />

          <p className="text-normal dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta
            illum praesentium esse nihil, fuga cum exercitationem placeat
            expedita. Numquam, temporibus possimus deleniti eum dolorem nam
            dignissimos nisi quasi vitae?
          </p>
          <Link  className="text-orange-500 font-semibold">Read More</Link>
          <hr className="my-6" />

          <div className="flex justify-between">
            <div className="rating items-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
               
              />
			<span className="ml-3 text-lg">4.9</span>
            </div>
			<div className="flex items-center gap-2">
				<FaEye className="text-xl"></FaEye>
				<span>499</span>
			</div>

          </div>
        </div>
      </div>
        </Link>
    );
};

export default SingleNews;