"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const center = {
  lat: 34.69490610809157, 
  lng: 135.20004921576663
};

const MyGoogleMap = () => {
  return (
    
    <LoadScript
      googleMapsApiKey="AIzaSyC7pQmC2WqYk_aNhe6PgLPjX9ackII0RWo"
    >
      <GoogleMap
        mapContainerClassName="w-full h-60 md:h-[400px] lg:h-[500px]"
        center={center}
        zoom={17}
      >
        {/* マーカーの配置 */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>


  )
}


export default MyGoogleMap