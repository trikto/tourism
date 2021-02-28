import React from "react";
import Logo from "../../images/Index/logo.png";
import { SocialIcon } from "react-social-icons";
import "./Navbar.css";

const Navbar = ({onRouteChange, scrollContact}) => {
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  const nav = document.querySelector(".nav");
	  const logo = document.querySelector(".logo");
	  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	    nav.style.background = "rgba(0,0,0,0.9)";
	    logo.style.width = "100px";
	    nav.style.height = "100px";
	  } else {
	  	nav.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))";
	  	logo.style.width = "150px";
	  	nav.style.height = "150px";
	  }
	}
	return (
		<div className="nav helvetica">
			<div className="logo">
				<img className="logo" src={Logo} />
			</div>
			<div className="pointer navComponent" onClick={() => onRouteChange("home")}>Home</div>
			<div className="pointer navComponent" onClick={() => onRouteChange("about")}>About Us</div>
			<div className="pointer navComponent" onClick={() => onRouteChange("dest")}>Destinations</div>
			<div className="pointer navComponent" onClick={() => onRouteChange("exp")}>Experiences</div>
				<div className="pointer navComponent" onClick={() => onRouteChange("contact")}>Contact Us</div>
			<div className="pointer navComponent">
				info@tourism.lk
			</div>
			<div className="pointer navComponent">
				+94 77 xxx xxxx
			</div>
			<SocialIcon
				className="grow navComponent"
				url="https://www.facebook.com"
			/>
			<SocialIcon
				className="grow navComponent"
				url="https://www.instagram.com"
			/>
			<SocialIcon
				className="grow navComponent"
				url="https://www.twitter.com"
			/>
		</div>
	);
};

export default Navbar;
