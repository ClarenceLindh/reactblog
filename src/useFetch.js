import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const[data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        console.log('useEffect ran');
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                console.log(res)
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsLoading(false);
                    setError(err.message)
                    console.log(err.message)
                }
            });

            return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;