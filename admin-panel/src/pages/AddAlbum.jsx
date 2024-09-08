import { assets } from "../assets/assets";

const AddAlbum = () => {
  return (
    <form className="flex flex-col items-start gap-8 text-gray-800">
      <div className="flex flex-col gap-4">
        <p> Upload Image</p>
        <input type="file" id="image" accept="image/*" hidden />
        <label htmlFor="image">
          <img
            src={assets.upload_area}
            className="w-24 cursor-pointer"
            alt="imagearea"
          />
        </label>
      </div>

      {/* div */}
      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input type="text" className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 lg:w-[400px] w-full" />

      </div>

       {/* div */}
       <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input type="text" className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 lg:w-[400px] w-full" />

      </div>

       {/* div */}
       <div className="flex flex-col gap-3">
        <p>Background Colour</p>
        <input type="color" />

      </div>
      <button type="submit" className="text-base mb-5 bg-black text-white py-2.5 px-14 cursor-pointer">ADD</button>
    </form>

  );
};

export default AddAlbum;
