import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png"; 
import "./Footer.css";
const Footer = () => {
  return (
    <footer id = "footer">
    <div className="leftFooter">
    <h4>Download Our App</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="PlayStore" />
            <img src={appStore} alt="AppStore" />
    </div>
     <div className="midFooter">
        <p className = "greeting">Thank you for visiting us</p>
        <h1>ShopQart</h1>
        <p className='rights'>High Quality is our first priority</p>
       

        <p className ="rights">Copyrights 2022 &copy; all rights reserved</p>
        <hr className='footer__line'/>
      </div>
        <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
         
        </div>
    </footer>
  )
}

export default Footer