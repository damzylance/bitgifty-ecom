import GoogleMapReact from "google-map-react";
import { BackIcon } from "./Icons";
import { useRouter } from "next/router";
const AnyReactComponent = ({ text }: any) => {
  const router = useRouter();
  return (
    <div>
      <BackIcon
        onClick={() => router.back()}
        extraClass="absolute left-[16px] top-[40px] w-[40px] h-[40px] bg-grey-1"
      />
    </div>
  );
};
export const Map = () => {
  const defaultProps = {
    center: {
      lat: 9.896527,
      lng: 8.858331,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "calc(100vh - 188px)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBO_t4bIc_zgUcjL43qXPsikqtyGpxbyFk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={2} lng={2} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
