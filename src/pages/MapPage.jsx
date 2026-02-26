import React from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import BackButton from "../components/BackButton";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapPage = () => {
  const location = useLocation();

  const employees = location.state || [];

  // Example city coordinates (you can expand this)
 const cityCoordinates = {
  "Tokyo": [35.6762, 139.6503],
  "London": [51.5072, -0.1276],
  "Edinburgh": [55.9533, -3.1883],
  "New York": [40.7128, -74.006],
  "San Francisco": [37.7749, -122.4194],
  "Singapore": [1.3521, 103.8198],
  "Sidney": [-33.8688, 151.2093],
};

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center">
      <BackButton />
      <div className="w-full max-w-5xl h-[500px] shadow-xl rounded-xl overflow-hidden">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {employees.map((emp, index) => {
            const city = emp[2];
            const coords = cityCoordinates[city];

            if (!coords) return null;

            return (
              <Marker key={index} position={coords}>
                <Popup>
                  <strong>{emp[0]}</strong>
                  <br />
                  {emp[1]}
                  <br />
                  {emp[2]}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
