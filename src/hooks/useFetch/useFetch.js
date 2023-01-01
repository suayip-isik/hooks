import { useEffect, useState } from "react";
import axios from "axios";

function useFecth(url) {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setdata] = useState([])

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setdata(responseData);
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { error, loading, data };

}

export default useFecth;