import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  // console.log(navigate);

  

  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
       <div className="flex items-center gap-2">
        {/* <img src="" alt="" /> */}
        <FaArrowAltCircleLeft onClick={()=>navigate(-1)} className="w-8 h-6 bg-green-500 rounded-2xl cursor-pointer hover:bg-[red]"/>
        <FaArrowAltCircleRight onClick={()=>navigate(1)} className="w-8 h-6 bg-green-500 rounded-2xl cursor-pointer hover:bg-[red]"/>
       </div>
       <div className="flex items-center gap-4">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore more</p>
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer">Install App</p>
        <p className="bg-purple-700 w-8 h-8 rounded-full flex items-center justify-center">O</p>
       </div>
    </div>
    <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>

    </div>
    </>
  )
}

export default Navbar