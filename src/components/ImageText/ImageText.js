import React from "react";
import "./ImageText.css";
import Image from "../../images/Index/section1.jpg";

const ImageText = () => {
	return (
		<div>
			<div className="imgContainer">
				<img id="sigiriya" src={Image} />
				<div className="imgText">
					<p className="imgHeading">Sri Lanka</p>
					<p>
						Sri Lanka is a beautiful tropical island in the Indian
						Ocean, situated at the southern tip of India. It is
						separated from India by the Palk Strait, which is 32 km
						wide at its narrowest point. The land area of the island
						is 65,610 square km with a maximum length of 432 km and
						a maximum width of 224 km.The southern half of the
						island is dominated by rugged hills and forests, while
						the northern half is a large plain. The island has
						beautiful palm-fringed beaches on the south western and
						south eastern coastlines.
					</p>
					<p>
						As a tourism destination, Sri Lanka can compete
						successfully with oil-rich destinations partly because
						of its pivotal geographical position. Its strategic
						location in the Indian Ocean, along the major air and
						sea routes between Europe and the Far East, is an
						advantage to the country's positioning as a global
						logistics hub. As O'Hare points out, “The Island
						'controls' routes to the Far East as well as to other
						destinations in the Indian Ocean, the Middle East,
						Africa and Australia". The geographical location of Sri
						Lanka was a reason for colonisation by three western
						powers, the Portuguese, the Dutch and the British.
					</p>
					<p>
						In addition to its location, Sri Lanka offers a plethora
						of options for tourists such as beach destinations,
						favourable climate, rich cultural heritage, national
						parks and wildlife. It has 1,585 km of coastline, with
						Hikkaduwa and Unawatuna being well known as excellent
						scuba diving spots. Mirissa has become famous for
						viewing of whales and dolphins, while Tangalle is being
						promoted as a diving destination. Meanwhile, Trincomalee
						is known for its natural harbour and has two relatively
						unexplored beaches.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ImageText;
