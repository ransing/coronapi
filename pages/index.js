import React from 'react';
import {useState, useEffect } from 'react';
import useStats from '../utils/useStats'


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

function Stats(){
    const stats = useStats();
    if(!stats) return <p>loading </p>
    return (
    <div> 
        <div className="statBlock">
            <h3> Confirmed </h3>
            <span>{stats.confirmed.value}</span>
        </div>
        <div className="statBlock">
            <h3> deaths:</h3>
            <span>{stats.death.value}</span>
        </div>
        <div className = "statBlock">
            <h3>Received:  </h3>
            <span> {stats.recovered.value}</span>
        </div>
        <p> Stats </p>
    </div>
    )
}

export default function index() {
    return (
        <div> hello
            <Stats></Stats>
        </div>
    )
}
