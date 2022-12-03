import React from "react";
import { BsCardImage } from "react-icons/bs";

function MemeForm() {
  return (
    <div>
      <form action="" className="meme-form">
        <div className="input-group">
          <input type="text" placeholder="Shut up" />
          <input type="text" placeholder="and take my money" />
        </div>
        <button className="form-btn">
          <span> Get a new meme image </span>
          <BsCardImage />
        </button>
      </form>
    </div>
  );
}

export default MemeForm;
