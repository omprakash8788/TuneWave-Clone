import { useEffect, useState } from "react"
import axios from 'axios'
import {url} from '../App'
import { toast } from "react-toastify";
const ListAlbum = () => {
  const [data, setData]=useState([]);
  // console.log(data);
  

  const fetchAlbums = async()=>{
    try {
      const response = await  axios.get(`${url}/api/album/list`);
      if(response.data.success){
        // console.log(response.data)
        setData(response.data.albums)
      }
      
    } catch (error) {
      toast.error("Error Occured")
      console.log(error);
      
      
    }
  }

  useEffect(()=>{
  fetchAlbums()
  },[])
  return (
    <div>ListAlbum</div>
  )
}

export default ListAlbum