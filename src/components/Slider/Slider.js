import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../images/Index/slider1.jpg";
import slider2 from "../../images/Index/slider2.jpg";
import slider3 from "../../images/Index/slider3.jpg";
import "./Slider.css";

const Slider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<Carousel className="helvetica" {...settings}>
			<div className="carouselContainer">
				<img src={slider1} />
				<div className="carouselText">
					<p className="carouselHeading">Step back in time</p>
					<p>
						Surrounded by wonderful scenery, lush tea plantations
						and cool waterfalls...
					</p>
				</div>
			</div>
			<div className="carouselContainer">
				<img src={slider2} />
				<div className="carouselText">
					<p className="carouselHeading">Wildlife safari</p>
					<p>Harmonize with nature in a wildlife safari...</p>
				</div>
			</div>
			<div className="carouselContainer">
				<img src={slider3} />
				<div className="carouselText">
					<p className="carouselHeading">Catch the sunset</p>
					<p>
						at the beautiful beaches of southern and eastern Sri
						Lanka...
					</p>
				</div>
			</div>
		</Carousel>
	);
};

export default Slider;
