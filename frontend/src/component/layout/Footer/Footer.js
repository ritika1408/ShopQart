import React from "react";
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      <h4>Company</h4>
          <ul>
            <li><NavLink to ="/" className="links">Home</NavLink></li>
            <li><NavLink to ="/Products" className="links">Products</NavLink></li>
            <li><NavLink to ="/about" className="links">About</NavLink></li>
            <li><NavLink to ="/Contact" className="links">Contact</NavLink></li>
           
          </ul>
      </div>

      <div className="midFooter">
        <h1>ShopQart</h1>
        <p>High Quality is our first priority</p>

      </div>

      <div className="rightFooter">
        <h4>Find Us On</h4>
        <a href="http://youtube.com"><YouTubeIcon className="s-i" />Youtube</a>
       
        <a href="https://github.com/ritika1408"><GitHubIcon className="s-i"/>GitHub</a>
        <a href ="https://www.linkedin.com/in/ritika-malhotra-870681201/" > <LinkedInIcon className ="s-i"/>LinkedIn</a>
        <a href="https://www.instagram.com/" > <InstagramIcon className="s-i" />Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;