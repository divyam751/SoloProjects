import { Heading } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import "../Styles/Footer.modulo.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='textPart'>
          <Heading>Voyagers</Heading>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur aut assumenda obcaecati alias, natus quae cum possimus
          </span>
        </div>
        <div className='socialMedia'>
          <BsInstagram />
          <BiLogoLinkedin />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};
export default Footer;
