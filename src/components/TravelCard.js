import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function TravelCard(props) {
  //destructure the props
  const { title, location, googleMapsUrl, startDate, endDate, desc, imageUrl } =
    props;
  return (
    <div className="travel-single-card">
      <div>
        <div className="travel-context">
          <img src={imageUrl} alt="" className="travel-img" />
          <div className="travel-desc">
            <div className="travel-location">
              <FaMapMarkerAlt color="rgba(32, 129, 214, 0.96" />
              <span className="travel-location-county">{location}</span>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <small>View on Google Map</small>
              </a>
            </div>
            <h5>{title}</h5>
            <div className="travel-date">
              <span>{startDate}</span>
              <span>{endDate}</span>
            </div>
            <p className="paragraph">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
