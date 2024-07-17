import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useStateContext } from "./Utils/Context";

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = [
  "places",
];
const mapOptions = {
  disableDefaultUI: true, // Disable all default UI
  mapTypeControl: false, // Disable map/satellite switch
};
const Places: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY || "",
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};
function Map() {
  const { state } = useStateContext();
  const center = useMemo(() => ({ lat: 9.072264, lng: 7.491302 }), []);

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-[calc(100vh-188px)]"
        options={mapOptions}
      >
        {state.selected && <Marker position={state.selected} />}
      </GoogleMap>
    </>
  );
}

export default Places;
