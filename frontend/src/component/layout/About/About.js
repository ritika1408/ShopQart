import React from "react";
import "./about.css";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
 
  return (
    <div className="about-section">
   
      <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
          </p>
          <div className="skills">
              <span><a href="https://github.com/ritika1408"  ><GitHubIcon className="s-i"/></a></span>
              <span><a href ="https://www.linkedin.com/in/ritika-malhotra-870681201/" > <LinkedInIcon className ="s-i"/></a></span>
              <span><a href="https://www.instagram.com/"> <InstagramIcon className="s-i" /></a></span>
          </div>
      </div>
      
  </div>
  );
};

export default About;