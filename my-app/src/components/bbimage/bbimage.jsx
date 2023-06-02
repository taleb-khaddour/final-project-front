

import { useState } from "react";

import axios from "axios";
import "./bbimage.css";

function   Bbimage() {

const [img, setImg] = useState({});
  const [imgFromBB, setImgFromBB] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    let image = e.target.files[0];
    setImg(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("image", img, img.name);
      let res = await axios.post(
        "https://api.imgbb.com/1/upload?key=e8e95c55c5edb874d3bcd7d4974724e4",
        fd
      );
      console.log(res.data.data.display_url);
      setImgFromBB(res.data.data.display_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <div><input type="submit" onChange={handleSubmit} />
</div>
        
      </form>
      <img src={imgFromBB} alt="" />
    </>
  );  
}
export default Bbimage;
