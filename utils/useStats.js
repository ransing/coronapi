import {useState, useEffect} from 'react'

export default function useStats(url){
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData(){
                console.log('fetching')
                const data = await fetch(url)
                .then (data => data.json())
                .catch(err=>{
                    setError(err)
                });
                setStats(data);
                setLoading(false);
        }
        fetchData();
    }, []);
    return {
        stats,
        loading,
        error,
    }; 
}
