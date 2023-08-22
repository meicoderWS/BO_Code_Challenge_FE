import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

function useAxiosRequest(method = 'GET', body = null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const options = {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                if (body) {
                    options.data = body;
                }

                const response = await axios(API_URL, options);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [method, body]);

    return { data, loading };
}

export default useAxiosRequest;
