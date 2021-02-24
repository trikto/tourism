import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

class MapComponent extends Component {
	constructor() {
		super();
	}

	render() {
		const style = {
			width: "50%",
			height: "auto",
		};
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
