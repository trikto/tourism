import React from "react";
import "./MapForm.css";
import MapComponent from "./MapComponent.js";
import ReCAPTCHA from "react-google-recaptcha";

class MapForm extends React.Component {
	constructor() {
		super();
	}

	render() {
		<script src="https://www.google.com/recaptcha/api.js"></script>;
		return (
			<div className="mapFormContainer">
				<div className="contactUsContainer">
					<h1>Contact Us</h1>
				</div>
				<MapComponent />
				<div className="formContainer">
					<h3>
						Please fill the form below for any inquiries. All fields
						marked with (*) are required.
					</h3>
					<form>
						<input type="text" placeholder="Your Name *" />
						<br />
						<input
							type="email"
							placeholder="Your Email Address *"
						/>
						<br />
						<input type="text" placeholder="Your Telephone *" />
						<br />
						<input
							type="textarea"
							placeholder="Additional Information"
							id="additionalInfo"
						/>
						<br />
						<ReCAPTCHA
							className="captcha"
							sitekey="6Ld1-mUaAAAAANXRI7QKyG9qUibfVyo52eqNk4Pr"
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default MapForm;
