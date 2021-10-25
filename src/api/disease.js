import axios from 'axios';

/*axios.create create are base url so we dont have to keep tying it.
could add params here and the api key if one was needed*/
export default axios.create({
    baseURL: 'https://disease.sh/v3/covid-19'
})