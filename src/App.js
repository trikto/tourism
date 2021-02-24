import "./App.css";
import "tachyons";
import Navbar from "./components/Navbar/Navbar.js";
import Slider from "./components/Slider/Slider.js";
import ImageText from "./components/ImageText/ImageText.js";
import AboutUsText from "./components/AboutUsText/AboutUsText.js";
import ParallaxScroll from "./components/ParallaxScroll/ParallaxScroll.js";
import MapForm from "./components/MapForm/MapForm.js";
import Footer from "./components/Footer/Footer.js";

function App() {
	return (
		<div className="App helvetica">
			<Navbar />
			<Slider />
			<ImageText />
			<AboutUsText />
			<ParallaxScroll />
			<MapForm />
			<Footer />
		</div>
	);
}

export default App;
