import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { LuClock4 } from "react-icons/lu";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  // console.log(id);
  const AlbumData = albumsData[id];
  // console.log(AlbumData);
  const {playWithId}=useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={AlbumData.image} alt="image" />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {AlbumData.name}
          </h2>
          <h4>{AlbumData.desc}</h4>
          <p className="mt-1">
            <img
              className="w-5 inline-block"
              src={assets.spotify_logo}
              alt=""
            />
            <b>TuneWave</b>*6,88,777 likes* <b>50 songs</b>
            about 2 hr 50 min
          </p>
        </div>
      </div>
      {/* another */}
      <div className="grid grid-cols-4 sm:grid-clos-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <LuClock4 className="m-auto w-4 h-4"/>
      </div>
      <hr />
      {
        songsData.map((item, index)=>(
            <div onClick={()=>playWithId(id)} key={index} className="grid grid-cols-4 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                <p className="text-white">
                    <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                    <img className="inline w-10 mr-5" src={item.image}  alt="" />
                 {item.name}
                </p>
                <p className="text-[15px]">{AlbumData.name}</p>
                <p className="text-[15px] hidden sm:block">2 days ago</p>
                <p className="text-[15px] text-center">{item.duration}</p>

            </div>
        ))
      }
    </>
  );
};

export default DisplayAlbum;
