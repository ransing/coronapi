import {useState, useEffect} from 'react'

export default function useStats(url){
    const [stats, setStats] = useState();
    useEffect(() => {
        async function fetchData(){
                console.log('fetching')
                const data = await fetch(url)
                .then (data => data.json());
                setStats(data)
        }
        fetchData();
    }, []);
    return stats; 
}
