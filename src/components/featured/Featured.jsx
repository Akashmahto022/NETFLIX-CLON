import React from "react";
import "./featured.scss";
import persone from "../../Assest/images/adult-1867889_1280 (1).jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie"? "Movie" : "Series"}</span>
                <select name="categ" id="categ">
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="adventure">Crime</option>
                    <option value="adventure">Fantasy</option>
                    <option value="adventure">Historical</option>
                    <option value="adventure">Horror</option>
                    <option value="adventure">Romance</option>
                    <option value="adventure">Thriler</option>
                    <option value="adventure">Animation</option>
                    <option value="adventure">Drama</option>
                    <option value="adventure">Documentry</option>
                </select>
            </div>
        )}
      <img src={persone} alt="" />
      <div className="info">
        <img src="" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nobis,
          dolor architecto dicta fugit, exercitationem dolore, commodi ad qui at
          officiis minus ea modi eveniet. Explicabo iusto nemo rem voluptatum.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>

            </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
