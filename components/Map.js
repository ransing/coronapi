import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map(props) {
    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
    .then(res => res.json())
    .then(data => {
      setCases(data[1]);
      // debugger;
      });
    console.log(data);
  }, []);

  const mapOnClick = (cases) => {
    console.log(cases)
    setSelectedCase(cases)
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
      
      {/* {cases.map(case => (
          <Marker
            onClick ={() => mapOnClick(case)}
            key={case.id}
            position={{
              lat: parseFloat(trail.latitude),
              lng: parseFloat(trail.longitude)
            }}
            
          />
        )
      )} */}

      { selectedCase && (
        < InfoWindow
        position={{
          lat: parseFloat(selectedCase.latitude),
          lng: parseFloat(selectedCase.longitude)
        }}
        onCloseClick={() => setSelectedCase(null) }
        >
          <div>
            <h2>{selectedCase.countryRegion}</h2>
            {/* <p>{selectedTrail.address}</p> */}
            <p>{selectedCase.confirmed}</p>
            <button onClick={()=> props.handleClick(selectedCase)}>See Cases</button>

          </div>

          </InfoWindow>
      )}

    </GoogleMap>
    // </div>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
