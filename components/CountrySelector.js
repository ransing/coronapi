import {useState, useEffect } from 'react';
import useStats from '../utils/useStats';

export default function CountrySelector(){
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    console.log(countries);
    if(!countries) return <p>loading </p>
    return (
    <div> 
        <select>
            {Object.entries(countries.countries).map((
                [country, code]) => (
                   <option key={code} value = {code}>
                        {country}
                    </option>
            ))
            })}
        </select>
    </div>
    )
}