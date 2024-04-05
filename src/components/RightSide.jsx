import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import pic1 from '../assets/qZone1.png'
import pic2 from '../assets/qZone2.png'
import pic3 from '../assets/qZone3.png'
const RightSide = () => {
  return (
    <div className='p-2'>
        <h2 className="text-3xl font-semibold mb-6">Login With</h2>
      <button className="btn btn-outline w-full text-blue-600 mb-3 text-lg">
        <FaGoogle></FaGoogle>
        Login with Google</button>
      <button className="btn btn-outline w-full text-slate-600 text-lg">
        <FaGithub></FaGithub>
        Login with Github</button>
        <div className='mt-10'>
            <h2 className="text-3xl font-semibold mb-8">Find Us on</h2>
            <a href="" className='flex items-center gap-3 px-6 border rounded-t-lg p-4 text-xl'>
            <FaFacebook className='text-blue-800'></FaFacebook>
            <span className='font-semibold'>Facebook</span>

            </a>
            <a href="" className='flex items-center gap-3 px-6 border p-4 text-xl'>
            <FaTwitter className='text-blue-600'></FaTwitter>
            <span className='font-semibold'>Twitter</span>

            </a>
            <a href="" className='flex items-center gap-3 px-6 border rounded-b-lg p-4 text-xl'>
            <FaInstagram className='text-red-600'></FaInstagram>
            <span className='font-semibold'>Instagram</span>

            </a>
        </div>
        <div className='bg-base-200 my-6 pl-6 pb-6'>
          <h2 className="text-3xl mb-10 pt-3">Q-Zone</h2>
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
        </div>
        <div className='bg-black text-white text-center p-10 space-y-10'>
        <h2 className="text-3xl font-bold leading-relaxed">Create an Amazing Newspaper</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, porro!</p>
        <button className='btn bg-red-500 rounded-none border-none text-white text-lg'>Learn More</button>
        </div>
    </div>
  );
};

export default RightSide;
