import axios, { AxiosInstance } from 'axios';
import config from '../config/config'

class UserService {
    instance: AxiosInstance;
    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl,
            timeout: 3000,
        });
    }

    getContactList = () => {
        return this.instance.get('/', {
            params: {
                results: config.numberCards,
            }
        }).then(response => response.data).catch((error) => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        })
    }
}

export default new UserService(config.userUrl);