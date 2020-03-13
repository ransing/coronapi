import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}


// import {useState, useEffect } from 'react';
// import useStats from '../utils/useStats';
// import Stats from './Stats.js'

// export default function CountrySelector(){
//     const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
//     console.log(countries);
//     const [selectedCountry, setSelectedCountry] = useState('USA');
//     if(loading) return <p>loading...</p>
//     if(error) return <p>error...</p>
//     // if(!countries) return <p>loading </p>
//     return (
//     <div> 
//         <h2>Current selection: {selectedCountry}</h2>
//         <select onChange= { e => {
//             setSelectedCountry(e.target.value);
//             console.log(selectedCountry)
//         }}>
//             {Object.entries(countries.countries).map((
//                 [country, code]) => (
//                    <option selected= {selectedCountry === countries.iso3[code]} key={code} value = {countries.iso3[code]}>
//                         {country}
//                     </option>
//             ))}
            
//         </select>
//         <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
//     </div>
//     )
// }