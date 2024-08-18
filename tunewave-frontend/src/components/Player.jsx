import { assets, songsData } from "../assets/assets";
// console.log(songsData);
import { FaShuffle } from "react-icons/fa6";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";
import { FaPlayCircle } from "react-icons/fa";
import { RiLoopRightFill } from "react-icons/ri";
import { LiaPlaySolid } from "react-icons/lia";
import { TiMicrophone } from "react-icons/ti";
import { HiMiniQueueList } from "react-icons/hi2";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaVolumeHigh } from "react-icons/fa6";
import { CgMiniPlayer } from "react-icons/cg";
import { TbZoomScan } from "react-icons/tb";
import { useContext } from "react";
import { FaRegPauseCircle } from "react-icons/fa";
import { PlayerContext } from "../context/PlayerContext";


const Player = () => {
  const {seekBar,seekSong, seekBg,play, playStatus, pause, track, time, next, previous }=useContext(PlayerContext)
  // console.log(seekBar);
  // console.log(seekBg);
  // seekBg,
  // seekBar,
  // seekSong

  // play,
  // pause,
  // track,
  // setTrack,
  // playStatus,
  // setPlayStatus,
  // time,
  // setTime
  console.log(track);
  
  
  return (
    <div className="h-[10%] bg-[purple] flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="image-picture" />
        <div>
          <p>{track.name}</p>

          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          {/* <img src={assets.shuffle_icon} alt="" /> */}
          <FaShuffle className="w-6 h-6 cursor-pointer" />
          <GrChapterPrevious onClick={previous} className="w-6 h-6 cursor-pointer hover:text-[red]" />
          {
            playStatus? <FaRegPauseCircle onClick={pause} className="w-6 h-6 cursor-pointer hover:text-[#0af306]" /> :
          <FaPlayCircle onClick={play} className="w-6 h-6 cursor-pointer" />
          }
          <GrChapterNext onClick={next} className="w-6 h-6 cursor-pointer hover:text-[red]" />
          <RiLoopRightFill className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      {/* Third part */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <LiaPlaySolid className="w-6 h-6"/>
        <TiMicrophone  className="w-6 h-6"/>
        <HiMiniQueueList  className="w-6 h-6"/>
        <BsFillSpeakerFill  className="w-6 h-6"/>
        <FaVolumeHigh  className="w-6 h-6"/>
           <div className="w-20 bg-slate-50 h-1 rounded"></div>
            <CgMiniPlayer className="w-6 h-6"/>
            <TbZoomScan className="w-6 h-6"/>
      </div>
    </div>
  );
};

export default Player;
