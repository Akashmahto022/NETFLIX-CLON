import React, { useState } from "react";
import "./listitem.scss";
import banner from "../../Assest/images/pexels-cottonbro-studio-4009409.jpg";
import trailler from "../../Assest/images/video (1080p).mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{left: isHovered && index * 225-50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={banner} alt="" />
      {isHovered && (
      <>
      <video src={trailler} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon className="icon" />
          <AddIcon className="icon" />
          <ThumbUpIcon className="icon" />
          <ThumbDownIcon className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam
          hic facilis, tempora voluptatibus deleniti dolore? Eum, neque quod.
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  );
};

export default ListItem;
