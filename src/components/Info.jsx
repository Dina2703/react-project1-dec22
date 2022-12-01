import React from "react";
import Avatar from "../images/boy.webp";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Info() {
  return (
    <section>
      <div className="info-sec">
        <img src={Avatar} alt="avatar" />
        <h3>Will Smith</h3>
        <p>Frontend Developer</p>
        <p>willsmith@website</p>
        <div className="btn-group">
          <button>
            <FaEnvelope className="btn-icon" /> Email
          </button>
          <button>
            <FaLinkedin className="btn-icon" /> Linkedin
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
