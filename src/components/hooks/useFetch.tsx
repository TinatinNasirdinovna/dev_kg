import React, { useEffect, useState } from 'react';

const jobs_url = "http://3.38.98.134/jobs"

const useFetch = ({
    url 

} = {
    url:  jobs_url
}) => {

    const [data, setData] = useState<unknown[]>([]);
    const [loding, setLoading] = useState(false)

    const fetchData = async () => {
    setLoading(true)
    try {
        const responce = await fetch(url);
        const data = await responce.json()
        if (data.statusCode === 200) {
            setData(data.data)
        }
    } catch (error) {
        console.log(error);
        
    }
    finally {
        setLoading(false)
    }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return {data, loding}

}
export default useFetch;