import React from "react";
import "./AboutUsText.css";

const AboutUsText = ({onRouteChange}) => {
	return (
		<div className="aboutContainer">
			<h1>About Us</h1>
			<p>
				At Pure Vacations, we warmly welcome friends from around the
				world to enjoy a memorable vacation filled with pure joy,
				friendliness and warmth in Sri Lanka. At our doors we showcase
				the UNESCO World Heritage Sites, culture, adventures, and exotic
				destinations in Sri Lanka.
			</p>
			<p>
				We are proficient in recognizing the requirements of our clients
				and help them assemble their dream vacation fulfilling the
				unique and inspiring experiences.
			</p>
			<button onClick={() => onRouteChange("about")}>Read More</button>
		</div>
	);
};

export default AboutUsText;
