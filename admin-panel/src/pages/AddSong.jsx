import { assets } from "../assets/assets";

const AddSong = () => {
  return (
    <form className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              src={assets.upload_song}
              alt="song"
              className="w-24 cursor-pointer"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2.5">
          <p>Upload Image</p>
          <input type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              src={assets.upload_area}
              alt="image"
              className="w-24 cursor-pointer"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 lg:w-[400px] w-full"
          placeholder="Type here"
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 lg:w-[400px] w-full"
          placeholder="Type here"
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[150px]">
          <option value="none">None</option>
        </select>
      </div>
      <button
        type="submit"
        className="text-base mb-5 bg-black text-white py-2.5 px-14 cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default AddSong;
