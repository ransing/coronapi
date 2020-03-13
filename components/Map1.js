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
    .then(r => r.json())
    .then(cases => {
      setCases(cases);
      // debugger;
      });
    console.log("this is the data", cases);
  }, []);

  const mapOnClick = (Case) => {
    console.log(Case)
    setSelectedCase(Case)
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
      defaultZoom={4}
      defaultCenter={{ lat: 39, lng: -98 }}
    >
      
      {cases.map(cases => (
          <Marker
            onClick ={() => mapOnClick(cases)}
            key={cases.countryRegion}
            position={{
              lat: parseFloat(cases.lat),
              lng: parseFloat(cases.long)
            }}
            
          />
        )
      )}

      { selectedCase && (
        < InfoWindow
        position={{
          lat: parseFloat(selectedCase.lat),
          lng: parseFloat(selectedCase.long)
        }}
        onCloseClick={() => setSelectedCase(null) }
        >
          <div>
            <h3>{selectedCase.provinceState}, {selectedCase.countryRegion}</h3>
            <p>Confirmed: {selectedCase.confirmed}</p>
            <p>Deaths: {selectedCase.deaths}</p>
          </div>

          </InfoWindow>
      )}

    </GoogleMap>
    // </div>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
