'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

import { MarkerF } from '@react-google-maps/api';

const defaultCenter = {
  lat: 37.5665,
  lng: 126.9780
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = React.useState<google.maps.LatLngLiteral | null>(null);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location: ", error);
        }
      );
    }
  }, []);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const center = currentPosition || defaultCenter;

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Zoom in a bit more for a local view
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {currentPosition && <MarkerF position={currentPosition} />}
        <></>
      </GoogleMap>
  ) : <></>;
}

export default React.memo(MapComponent);
