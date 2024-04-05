
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide";
import News from "../components/News";
import RightSide from "../components/RightSide";
const Home = () => {
  return (
    <div className="space-y-3">
      <Header></Header>
      <div className="flex">
        <button className="btn btn-secondary rounded-none w-32 text-lg">Latest</button>
        <Marquee className="bg-base-200 font-semibold" speed={100} pauseOnHover ={true}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laudantium sequi id nemo delectus eveniet minima dolorum. Rerum, corrupti quaerat?</Marquee>
      </div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6">
      <div className="">
        <LeftSide></LeftSide>
      </div>
      <div className="border col-span-2"><News></News></div>
      <div className="border">
        <RightSide></RightSide>
      </div>
      </div>
    </div>
  );
};

export default Home;
