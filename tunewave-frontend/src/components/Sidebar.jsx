import { IoHome } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FaStackExchange } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoHome className="w-6 h-6" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <BsSearch className="w-6 h-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaStackExchange className="w-8 h-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowAltCircleRight className="w-8 h-8" />
            <FaCirclePlus className="w-8 h-8" />
          </div>
        </div>
        <div className="p-4 border border-blue-400 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">Its Wasy We Will Help You</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 border border-blue-400 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Let Find Some PoadCast To Follow</h1>
          <p className="font-light">We will keep you update on new episodes</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4">
            Browser poadcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
