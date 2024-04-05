import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import moment from 'moment';

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl">All Category</h2>
      <div className="pl-10 my-6">
        {categories.map((category) => (
          <Link className="block mb-6 text-lg" key={category.id}>
            {category.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="card rounded-b-none  w-80 mx-auto  bg-base-100 ">
          <figure>
            <img
            className="w-[95%]"
              src={image1}
            />
          </figure>
          <div className="p-2">
            <h2 className=" text-lg font-semibold mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex items-center gap-10 pb-6 ">
                <p>Sports</p>
                <p>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-80 rounded-none mx-auto  bg-base-100 ">
          <figure>
            <img
            className="w-[95%]"
              src={image2}
            />
          </figure>
          <div className="p-2">
            <h2 className=" text-lg font-semibold mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex items-center gap-10 pb-6 ">
                <p>Sports</p>
                <p>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-80 rounded-t-none mx-auto  bg-base-100 ">
          <figure>
            <img
            className="w-[95%]"
              src={image3}
            />
          </figure>
          <div className="p-2">
            <h2 className=" text-lg font-semibold mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex items-center gap-10 pb-6 ">
                <p>Sports</p>
                <p>{moment().format("MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
