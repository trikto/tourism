import React from "react";
import Logo from "../../images/Index/logo.png";
import { SocialIcon } from "react-social-icons";
import "./Navbar.css";

const Navbar = ({onRouteChange, scrollContact}) => {
	return (
		<div className="nav helvetica">
			<div className="dib ma2 pr3 logo">
				<img className="logo" src={Logo} height="100px" />
			</div>
			<div className="dib dim pointer ma2 navComponent" onClick={() => onRouteChange("home")}>Home</div>
			<div className="dib dim pointer ma2 navComponent" onClick={() => onRouteChange("about")}>About Us</div>
			<div className="dib dim pointer ma2 navComponent" onClick={() => onRouteChange("dest")}>Destinations</div>
			<div className="dib dim pointer ma2 navComponent" onClick={() => onRouteChange("exp")}>Experiences</div>
				<div className="dib dim pointer ma2 navComponent" onClick={() => onRouteChange("contact")}>Contact Us</div>
			<div className="dib dim pointer ma2 navComponent">
				info@tourism.lk
			</div>
			<div className="dib dim pointer ma2 navComponent">
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
