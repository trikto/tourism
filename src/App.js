import React, {Component} from "react";
import "./App.css";
import "tachyons";
import Navbar from "./components/Navbar/Navbar.js";
import Slider from "./components/Slider/Slider.js";
import ImageText from "./components/ImageText/ImageText.js";
import AboutUsText from "./components/AboutUsText/AboutUsText.js";
import ParallaxScroll from "./components/ParallaxScroll/ParallaxScroll.js";
import MapForm from "./components/MapForm/MapForm.js";
import Footer from "./components/Footer/Footer.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Destinations from "./components/Destinations/Destinations.js";
import Experiences from "./components/Experiences/Experiences.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			route:"home"
		}
	}

	onRouteChange = (route) => {
		this.setState({route:route})
	}

	scrollContact = () => {
		const anchor = document.querySelector(".mapFormContainer");
		anchor.scrollIntoView({behavior:"smooth",block:"center"});
	}

	scrollTop = () => {
		const body = document.querySelector("#root");
		body.scrollIntoView({behavior:"smooth"});
	}

	componentDidUpdate() {
		this.scrollTop();
		if (this.state.route === "contact") {
			this.scrollContact();
		}
	}

	render() {
		return (
		<div className="App helvetica">
			{this.state.route === "home" ? (
				<div>
					<Navbar onRouteChange={this.onRouteChange} scrollContact={this.scrollContact} />
					<Slider />
					<ImageText />
					<AboutUsText onRouteChange={this.onRouteChange} />
					<ParallaxScroll onRouteChange={this.onRouteChange} />
					<MapForm />
					<Footer />
				</div>
			) : this.state.route === "exp" ? (
				<div>
					<Navbar onRouteChange={this.onRouteChange}/>
					<Experiences />
					<Footer />
				</div>
			) : this.state.route === "dest" ? (
				<div>
					<Navbar onRouteChange={this.onRouteChange} />
					<Destinations />
					<Footer />
				</div>
			) : this.state.route ==="contact" ? (
				<div>
					<Navbar onRouteChange={this.onRouteChange}/>
					<Slider />
					<ImageText />
					<AboutUsText onRouteChange={this.onRouteChange} />
					<ParallaxScroll onRouteChange={this.onRouteChange} />
					<MapForm />
					<Footer />
				</div>
			) : (
				<div>
					<Navbar onRouteChange={this.onRouteChange} />
					<AboutUs />
					<Footer />
				</div>
			)}
		</div>
	);
	}
}

export default App;
