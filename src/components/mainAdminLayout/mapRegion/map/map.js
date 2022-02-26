import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import "leaflet/dist/leaflet.css";
import "../regions/region.css";
import SpinnerRadar from "../../../../shared/spinnerRadar/spinnerRadar";
var greenIcon = L.icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [15, 15], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
class Maps extends Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 5
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      // do_something(position.coords.latitude, position.coords.longitude);
    });
  }
  render() {
    const { positions, isLoading } = this.props;
    //const position = [this.state.location.lat, this.state.location.lng];
    return (
      <div
        style={{
          height: "560px",
          width: "100%",
          border: "1px dotted gold"
        }}
        className="map-container"
      >
        <Map style={{ height: "100%", width: "100%" }} zoom={3} center={[0, 0]}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          {isLoading ? (
            <SpinnerRadar />
          ) : (
            positions.map(
              el =>
                el.longitude &&
                el.latitude && (
                  <Marker
                    position={{
                      lat: el.latitude,
                      lng: el.longitude
                    }}
                    icon={greenIcon}
                  >
                    <Popup>
                      <h3>location : {el.name}</h3>
                    </Popup>
                  </Marker>
                )
            )
          )}
        </Map>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    positions: state.mapIcon.regions,
    isLoading: state.mapIcon.isLoading
  };
};
export default connect(
  mapStateToProps,
  null
)(Maps);
