import React from "react";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="flink">
          <AiFillLinkedin />
          <AiFillFacebook />
          <FaTelegram />
        </div>
        <div className="copy">
          <p>&copy: 2022 RK-Technical.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
