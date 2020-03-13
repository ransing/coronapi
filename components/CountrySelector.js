import {useState, useEffect } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats.js'

export default function CountrySelector(){
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    console.log(countries);
    const [selectedCountry, setSelectedCountry] = useState('USA');
    if(!countries) return <p>loading </p>
    return (
    <div> 
        <h2>Current selection: {selectedCountry}</h2>
        <select onChange= { e => {
            setSelectedCountry(e.target.value);
        }}>
            {Object.entries(countries.countries).map((
                [country, code]) => (
                   <option key={code} value = {countries.iso3[code]}>
                        {country}
                    </option>
            ))
            })}
        </select>
        <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </div>
    )
}