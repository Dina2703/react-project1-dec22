import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function TravelCard(props) {
  //destructure the props
  const {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    desc,
    imageUrl,
  } = props;
  return (
    <div className="travel-single-card">
      <div>
        <div className="travel-context">
          <img src={imageUrl} alt="" className="travel-img" width="150px" />
          <div className="travel-desc">
            <div className="travel-location">
              <FaMapMarkerAlt />
              <span>{location}</span>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <small>View on Google Map</small>
              </a>
            </div>
            <h3>{title}</h3>
            <div className="travel-date">
              <span>{startDate}</span>
              <span>{endDate}</span>
            </div>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
