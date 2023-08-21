import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/locations';

const useAxiosRequest = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const makeRequest = async (method, body = null) => {
        setLoading(true);
        try {
            const response = await axios[method](`${API_URL}`, body);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, data, error, makeRequest };
};

export default useAxiosRequest;
