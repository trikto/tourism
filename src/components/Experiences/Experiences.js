import React from "react";
import "./Experiences.css";
import image from "../../images/Experiences/image.jpg";
import content from "./content.js";

const Experiences = () => {
	const expArray = content.map((item,i) => {
		const {index,expImage,heading,paragraph} = item;
		if (index % 2 !== 0) {
			return (
				<div className="expContainer">
					<div className="expImageContainer">
					<img className="expImage" src={expImage} />
					</div>
					<div className="expDesign">
						<h1>{heading}</h1>
						<p>{paragraph}</p>
					</div>
					<div className="rotatedDivLeft">
					</div>
				</div>
			);
		} else {
			return (
				<div className="expContainer">
					<div className="expImageContainer">
					<img className="expImage" src={expImage} />
					</div>
					<div className="expDesign" style={{"right":"0%"}}>
						<h1>{heading}</h1>
						<p>{paragraph}</p>
					</div>
					<div className="rotatedDivRight">
					</div>
				</div>
			);
		}
	});
	return (
		<div>
			<div className="expHomeImageContainer">
				<img src={image} />
				<div className="expBottomFade">
					<h1>Experiences</h1>
				</div>
			</div>
			{expArray}
		</div>
	);
}

export default Experiences;