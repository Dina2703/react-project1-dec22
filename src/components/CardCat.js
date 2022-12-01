import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function CardCat({ img, name, tel, email }) {
  return (
    <div className="card-cat">
      <img src={img} alt="cat" />
      <div>
        <h3>{name}</h3>
        <div className="cat-tel">
          <BsTelephoneOutboundFill />
          <p>{tel}</p>
        </div>
        <div className="cat-email">
          <GrMail />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCat;
