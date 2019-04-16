import axios from 'axios';
import { KEY, baseURL } from './Constants';

export default axios.create({
    baseURL: baseURL,
    params: {
        part: 'snippet',
        maxResults: 10,
        key: process.env.REACT_APP_KEY
    }
});