/*1 import combine reducers*/
import { combineReducers } from "redux";

/*import reducers*/
import GetCountries from "./GetCountries";
import CountryCovid from "./CountryCovid";
import TableData from './TableData';
import LastMonth from './LastMonth';
import SetActive from './SetActive'

/*3 create const object for reducers*/
//remember if you're happy for the key and value to be the same just add LastMonth
export default combineReducers({
    countries: GetCountries,
    countryCovid: CountryCovid,
    tableData: TableData,
    lastMonth: LastMonth,
    setActive: SetActive
})