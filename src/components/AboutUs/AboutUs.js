import React from "react";
import "./AboutUs.css";
import image from "../../images/About/image.jpg";
import map from "../../images/About/map.jpg";
import about1 from "../../images/About/about1.jpg"

const AboutUs = () => {
	return (
		<div>
			<div id="aboutUsImageContainer">
				<img src={image} />
				<div className="bottomFade">
					<h1>About Us</h1>
				</div>
			</div>
			<div id="mapImageContainer">
							<div id="mapImageText">
							<p>At Pure Vacations, we warmly welcome friends from around the world to enjoy a memorable vacation filled with pure joy, friendliness and warmth in Sri Lanka. At our doors we showcase the UNESCO World Heritage Sites, culture, adventures, and exotic destinations in Sri Lanka.</p>
							<p>We are proficient in recognizing the requirements of our clients and help them assemble their dream vacation fulfilling the unique and inspiring experiences. Our passion is to craft an unforgettable vacation for every customer. We combine the power of cutting edge technology with strong industry knowledge, experiences and innovative ideas to create grander holiday experience exactly the way you dreamed of.</p>
							</div>
							<img id="mapImage" src={map} />
				</div>
				<div id="whyUsContainer">
					<div id="whyUsFirst">
					<img src={about1} />
					</div>
					<div id="whyUsSecond">
					<h1>Why Us</h1>
					<p>We are a strong entity with over 20 years of experiences in creating unique holidays, customized vacations, event management including, weddings, meetings, conferences, ceremonies and exhibitions. We are well equipped with a team of people who are innovative, creative and responsive. They are capable of driving the products and operation excellence in serving the clients.</p>
					</div>
				</div>
		</div>
	);
};

export default AboutUs;
