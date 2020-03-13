import {useState, useEffect } from 'react';
import useStats from '../utils/useStats';

export default function Stats({url}){
    const {stats, loading, error} = useStats(url);
    if(!stats) return <p>loading </p>
    if (error) return <p>Error.. </p>
    return (
    <div> 
        <div className="statBlock">
            <h3> Confirmed </h3>
            <span>{stats.confirmed.value}</span>
        </div>
        <div className="statBlock">
            <h3> deaths:</h3>
            <span>{stats.deaths.value}</span>
        </div>
        <div className = "statBlock">
            <h3>Received:  </h3>
            <span> {stats.recovered.value}</span>
        </div>
        <p> Stats </p>
    </div>
    )
}