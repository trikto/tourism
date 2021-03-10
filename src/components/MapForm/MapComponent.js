import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { useMediaPredicate } from "react-media-hook";

class MapComponent extends Component {
	constructor(props) {
	    super(props);
	    this.state = { windowWidth: window.innerWidth };
	}

 	handleResize = (e) => {
	  this.setState({ windowWidth: window.innerWidth });
	};

	componentDidMount() {
	  window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
	  window.addEventListener("resize", this.handleResize);
	} 

	render() {
		let style = {
			width: "50%",
			height: "auto",
		};

		if (this.state.windowWidth <= 1000) {
			style = {
				width:"100%",
				height:"auto"
			}
		}

		return (
			<div className="mapContainer">
				<Map
					google={this.props.google}
					zoom={15}
					initialCenter={{
						lat: 6.830023305247508,
						lng: 79.86564225140285,
					}}
					style={style}
				>
					<Marker />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyD4fcIHRGMRdHQrv9dNGUfOuiC9SJCwxPA",
	version: 3.31,
})(MapComponent);
