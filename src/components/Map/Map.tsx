import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map({dimensions}:any) {
    const containerStyle = {
      width: dimensions.width,
      height: '363px'
    };
    
    const center = {
      lat: -3.745,
      lng: -38.523
    };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDn5Te-hq5BPTwMl1FMFp1SmrbTz5-Y1Yg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
