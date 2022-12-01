import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const social = [
  {
    icon: <FaFacebookF />,
    id: 1,
  },
  {
    icon: <FaTwitter />,
    id: 2,
  },
  {
    icon: <FaInstagram />,
    id: 3,
  },
  {
    icon: <FaLinkedinIn />,
    id: 4,
  },
];

function Footer() {
  return (
    <footer id="task1">
      {social.map((i) => (
        <div key={i.id}>
          <button>{i.icon}</button>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
