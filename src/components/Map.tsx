import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FC } from "react";

const containerStyle = {
  minHeight: '675px'
};

interface IAppProps {
  center: {
    lat: number;
    lng: number;
  }
};

const Map: FC<IAppProps> = ({center}) => {
  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyBhR8vQTfC9_Er5eHwPYTw-KHkiz2LrIow"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
          <Marker 
            position={center} 
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
