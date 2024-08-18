import { Link } from "react-router-dom";
import notfoundImage from "../../images/not-found.png";
const index = () => {
  return (
    <div>
      <img className="mx-auto" src={notfoundImage} alt="" />
      <Link>
        <h1 className="w-[200px] mx-auto text-black mt-5 text-xl font-semibold bg-[#42a7da] rounded-md px-3 py-2">
          Page Not Found
        </h1>
      </Link>
    </div>
  );
};

export default index;
