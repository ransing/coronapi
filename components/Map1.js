import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map(props) {
  const [trails, setTrails] = useState([]);
    const [selectedTrail, setSelectedTrail] = useState(null)

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
    .then(r => r.json())
    .then(trails => {
      setTrails(trails);
      // debugger;
      });
    console.log("this is the data", trails);
  }, []);

  const mapOnClick = (trail) => {
    console.log(trail)
    setSelectedTrail(trail)
  }

  return (

    // <div style={{ "height": "120", "width": "120" }}>
    //   <div>
    //     hgig 
    //     </div>

    <GoogleMap
      // style={{ height: '100vh', width: '100%' }}
      // width="120" 
      // height="120"
      defaultZoom={7}
      defaultCenter={{ lat: 39, lng: -106 }}
    >
      
      {trails.map(trail => (
          <Marker
            onClick ={() => mapOnClick(trail)}
            key={trail.countryRegion}
            position={{
              lat: parseFloat(trail.lat),
              lng: parseFloat(trail.long)
            }}
            
          />
        )
      )}

      { selectedTrail && (
        < InfoWindow
        position={{
          lat: parseFloat(selectedTrail.lat),
          lng: parseFloat(selectedTrail.long)
        }}
        onCloseClick={() => setSelectedTrail(null) }
        >
          <div>
            <h2>{selectedTrail.countryRegion}</h2>
            <h2>{selectedTrail.provinceState}</h2>
            <p>{selectedTrail.confirmed}</p>
            <button onClick={()=> props.handleClick(selectedTrail)}>See Trails</button>
            <button onClick={()=> props.handleClick(selectedTrail)}>See Trails</button>

          </div>

          </InfoWindow>
      )}

    </GoogleMap>
    // </div>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
