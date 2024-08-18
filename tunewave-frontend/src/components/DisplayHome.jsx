import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongItem from "./SongItem";
// console.log(albumsData);

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Features Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
      <h1 className="my-5 font-bold text-2xl">Features Items</h1>
      <div className="flex overflow-auto">

      {
        songsData.map((item,index)=>(
          <SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />

        ))
      }
      </div>


      </div>
    </>
  );
};

export default DisplayHome;
