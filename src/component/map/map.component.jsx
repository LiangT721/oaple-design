import React, { Fragment } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { contactText } from "../../data/contactText.data";

import "./map.style.scss";

const lat = contactText.location[0];
const lng = contactText.location[1];

const containerStyle = {
  width: "100%",
  height: "30vh",
};

const center = {
  lat: lat,
  lng: lng,
};

const position = {
    lat: lat,
    lng: lng,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const GoogleMapDiv = () => {
  return (
    <Fragment>
      <div className="map-div h-30">
        <LoadScript googleMapsApiKey="apiKey">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker
              onLoad={onLoad}
              icon={{
                path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                fillColor: "yellow",
                fillOpacity: 0.9,
                scale: 2,
                strokeColor: "gold",
                strokeWeight: 2,
              }}
              position={position}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </Fragment>
  );
};
export default GoogleMapDiv;
