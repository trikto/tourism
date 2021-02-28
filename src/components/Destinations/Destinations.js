import React from "react";
import "./Destination.css";
import image from "../../images/Destinations/image.jpg";
import content from "./content.js";

const Destinations = () => {
	const destArray = content.map(item => {
		const {destImage ,heading,paragraph}  = item;
		return (
			<div className="destContainer">
				<div className="destImageContainer">
				<img className="destImage" src={destImage} />
				</div>
				<div className="textContainer">
					<h1>{heading}</h1>
					<p>{paragraph}</p>
				</div>
			</div>
		);
	})
	return <div>
		<div className="destHomeImageContainer">
				<img src={image} />
				<div className="destBottomFade">
					<h1>Destinations</h1>
				</div>
		</div>
		{destArray}
	</div>
}

export default Destinations;