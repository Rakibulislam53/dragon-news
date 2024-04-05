import logo from "../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo} className="mx-auto mt-10" alt="" />
      <div className="text-center">
        <p className=" text-lg">Journalism without Fear or Favour</p>
        <p className="mt-2">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
        </div>
    );
};

export default Header;