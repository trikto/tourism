import React, {useEffect} from "react";
import Logo from "../../images/Index/logo.png";
import "./Navbar.css";
import yellowPhone from "../../images/Index/yellowPhone.png";
import yellowMail from "../../images/Index/yellowMail.png";

const Navbar = ({onRouteChange}) => {

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

	function openNav() {
	  document.querySelector(".sideBar").style.width = "250px";
	}

	/* Set the width of the side navigation to 0 */
	function closeNav() {
	  document.querySelector(".sideBar").style.width = "0";
	}

	return (
		<div>
			<ul className="nav helvetica">
				<li className="logo">
					<img className="logo" src={Logo} />
				</li>
				<li onClick={() => onRouteChange("home")}><a>Home</a></li>
				<li onClick={() => onRouteChange("about")}><a>About Us</a></li>
				<li onClick={() => onRouteChange("dest")}><a>Destinations</a></li>
				<li onClick={() => onRouteChange("exp")}><a>Experiences</a></li>
				<li onClick={() => onRouteChange("contact")}><a>Contact Us</a></li>
				<li className="navComponent">
					<img src={yellowMail} id="yellowMail" />
					info@tourism.lk
				</li>
				<li className="navComponent">
					<img src={yellowPhone} id="yellowPhone" />
					+94 77 xxx xxxx
				</li>
				<li className="navComponent"> 
					<i className="fab fa-facebook fa-2x"></i>
					<i className="fab fa-instagram fa-2x"></i>
					<i className="fab fa-twitter fa-2x"></i>
				</li>
			</ul>
			<div className="miniNav">
				<img className="logo" src={Logo} />
					<i className="fab fa-facebook fa-2x"></i>
					<i className="fab fa-instagram fa-2x"></i>
					<i className="fab fa-twitter fa-2x"></i>
					<div className="equiv" onClick={() => openNav()}>
					&#9776;
					</div>
			</div>
			<div className="sideBar">
				<div id="times" onClick={() => closeNav()}>&times;</div>
				<div onClick={() => onRouteChange("home")}>Home</div>
				<div onClick={() => onRouteChange("about")}>About Us</div>
				<div onClick={() => onRouteChange("dest")}>Destinations</div>
				<div onClick={() => onRouteChange("exp")}>Experiences</div>
				<div onClick={() => onRouteChange("contact")}>Contact Us</div>
			</div>
		</div>
	);
}

export default Navbar;
