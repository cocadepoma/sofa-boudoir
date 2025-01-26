import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ className }) => {

  return (
    <MapContainer
      center={[36.6754301, -5.4455106]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[36.6754301, -5.4455106]} draggable={true} animate={true} autoPan>
        <Popup
        >
          <p>
            Somos el sofá rojo, ven a vernos!
          </p>
          <p>
            Plaza de los Ejércitos Españoles, 9 Bajo, Ubrique (Cádiz)
          </p>
          <p>
            Te esperamos...
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;