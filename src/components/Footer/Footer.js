import React from "react";
import "./Footer.css";
import {
	faPhone,
	faCompass,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer1 from "../../images/Index/footer-facebook.png";
import footer2 from "../../images/Index/footer-instagram.png";
import footer3 from "../../images/Index/footer-twitter.png";

const Footer = () => {
	return (
		<div>
			<div className="emptyDiv"></div>
			<div className="firstContainer">
				<div className="border-right">
					<FontAwesomeIcon className="fa-2x" icon={faCompass} />
					<p>31/13 H, Samudrasanna Place, Mt Lavinia, Sri Lanka</p>
				</div>
				<div className="border-right">
					<FontAwesomeIcon className="fa-2x" icon={faPhone} />
					<p>+94 77 552 3804</p>
				</div>
				<div>
					<FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
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
