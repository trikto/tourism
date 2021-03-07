import React from "react";
import "./Footer.css";
import footer1 from "../../images/Index/footer-facebook.png";
import footer2 from "../../images/Index/footer-instagram.png";
import footer3 from "../../images/Index/footer-twitter.png";
import yellowPhone from "../../images/Index/yellowPhone.png";
import yellowMail from "../../images/Index/yellowMail.png";
import yellowMarker from "../../images/Index/yellowMarker.png";

const Footer = () => {
	return (
		<div>
			<div className="firstContainer">
				<div className="border-right">
					<img src={yellowMarker} />
					<p>31/13 H, Samudrasanna Place, Mt Lavinia, Sri Lanka</p>
				</div>
				<div className="border-right">
					<img src={yellowPhone} />
					<p>+94 77 552 3804</p>
				</div>
				<div>
					<img src={yellowMail} />
					<p>info@purevacation.lk</p>
				</div>
			</div>
			<div className="secondContainer">
				<div className="flexDiv">
					<div>
						<img className="grow" src={footer1} />
					</div>
					<div>
						<img className="grow" src={footer2} />
					</div>
					<div>
						<img className="grow" src={footer3} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
