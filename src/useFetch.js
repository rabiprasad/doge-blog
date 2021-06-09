import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();  //abort controller

        fetch(url,{signal: abortCont.signal})     //linking abort to fetch
            .then(res => {
                if(!res.ok) {throw Error("Could not fetch data :(");}
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name !== "AbortError"){    //checking if error is due to abort
                    console.log(err);
                    setIsPending(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort();    //clean up function
    },[url]);
    return {data, isPending, error};
}
 
export default useFetch;