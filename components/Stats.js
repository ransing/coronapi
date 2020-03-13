import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #ff9966;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log("hello");
  if (error) return <p> Error...</p>;
  if (loading) return <p>Loading...</p>;
  if(!stats.confirmed) return <p style={{"font-size":"25px"}}>No Stats Available, Please check in later. </p>
  return (
    <StatGrid style={{"font-family":"courier"}}>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
        <h4>Percent mortality: </h4>
        <span>{stats.deaths.value/stats.confirmed.value*100}%</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  );
}

// import {useState, useEffect } from 'react';
// import useStats from '../utils/useStats';

// export default function Stats({url}){
//     const {stats, loading, error} = useStats(url);
//     if(loading) return <p>loading....</p>;
//     if (error) return <p> error.. </p>;
//     if(!stats) return <p>loading </p>
//    console.log(stats.confirmed,loading,error, url);
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