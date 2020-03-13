import React from 'react';
import {useState, useEffect } from 'react';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
// import {WrappedMap} from '../Components/Map';
import {WrappedMap} from '../Components/Map1';
import Head from 'next/head';



// function useStats(){
//     const [stats, setStats] = useState();
//     useEffect(() => {
//         async function fetchData(){
//                 console.log('fetching')
//                 const data = await fetch('https://covid19.mathdro.id/api')
//                 .then (data => data.json());
//                 setStats(data)
//         }
//         fetchData();
//     }, []);
//     return stats; 
// }

// function Stats(){
//     const stats = useStats('https://covid19.mathdro.id/api');
//     if(!stats) return <p>loading </p>
//     return (
//     <div> 
//         <div className="statBlock">
//             <h3> Confirmed </h3>
//             <span>{stats.confirmed.value}</span>
//         </div>
//         <div className="statBlock">
//             <h3> deaths:</h3>
//             <span>{stats.deaths.value}</span>
//         </div>
//         <div className = "statBlock">
//             <h3>Received:  </h3>
//             <span> {stats.recovered.value}</span>
//         </div>
//         <p> Stats </p>
//     </div>
//     )
// }

export default function index() {
    return (
        <div> 
            <Head>  <link rel="icon" 
                    type="image/png" 
                    href="https://cdn3.iconfinder.com/data/icons/coronavirus-12/64/coronavirus-virus-pandemic-disease-infection-covid19-512.png"/>
                    <title>COVID-19 Tracker</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1 style={{"textAlign":"center"}}>Latest COVID-19 Stats</h1>
            <Stats url={'https://covid19.mathdro.id/api'}></Stats>
            <CountrySelector></CountrySelector>
            {/* <Stats url={'https://covid19.mathdro.id/api/countries/USA'}></Stats> */}
            
            <div style={{width: '100vw', height: '70vw'}}>
                <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                        loadingElement={<div style={{ height: '100%'}} />}
                        containerElement={<div style={{ height: '100%'}} />}
                        mapElement={<div style={{height: '100%'}} />}
            />
            </div>
            <h4 style={{"textAlign":"center"}} > <a href="https://github.com/ransing/coronapi" target="_blank">Source code </a> </h4>
        </div>

    )
}
