import disease from "../api/disease"

/*Grab the countries data*/
/*named export*/
export const GetCountriesData = () => {
    /*return async function passing dispatch to it for us to manually call later*/
    return async (dispatch) => {
        /*assign var to result of calling our api*/
        const res = await disease.get('/countries')
        //only want the country name and id here
        const countries = res.data.map(x => {
            return {
                name: x.country,
                value: x.countryInfo.iso2
            }
        })
        //unshift to manually add ww to the start
        countries.unshift({name: 'Worldwide',value: 'worldwide'})

        //grab the first 2 cases
        //if a > b return false else return true
        //look into sort some more
        //should return an array sorted by .cases
        const tableData = res.data.sort((a, b) => a.cases > b.cases ? -1 : 1)

        /*manually call dipatch to create a classic action*/
        dispatch({
            type: 'GET_COUNTRIES',
            payload: countries
        })
        dispatch({
            type: 'TABLE_DATA',
            payload:tableData
        })
    }
}

/*Get covid data for specific countrie*/
export const GetCountryCovidData = (x) => {
    return async (dispatch) => {
        /*ternery operator to change link depending on value of x*/
        const url = x === 'worldwide' ? '/all' : `/countries/${x}`;
        const res = await disease.get(url);
        dispatch({
            type: 'COUNTRY_COVID',
            payload: res.data
        })
    }
}

/*Get covid data from last month*/
export const LastMonth = () => {
    return async (dispatch) => {
        const res = await disease.get('/historical/all?lastdays=30');

        /*works but I dont get it yet*/ 
        const buildChartData = (data, casesType="cases") => {
            let chartData = [];
            let lastDataPoint;
            /*date is the actual data from the cases, deaths, recovered objects*/
            /*data is an obj containing cases, deaths, etc*/
            for (let date in data.cases){
                // console.log(`date: ${date}`)
                if(lastDataPoint){
                    let newDataPoint = {
                        x: date,
                        //needs to be bracket notation instead of dot because the key is the value we want
                        y: data[casesType][date] - lastDataPoint
                    };
                    chartData.push(newDataPoint);
                    // console.log(data[casesType][date])
                }
                /*this is the cases number*/
                lastDataPoint = data[casesType][date];
                // console.log(`last point: ${lastDataPoint}`)
            }
            return chartData;
        }

        dispatch({
            type: 'LAST_MONTH',
            payload: buildChartData(res.data)
        })
    }
}

export const setActive = (x) =>{
    return {
        type: 'SET_ACTIVE',
        payload: x
    }
}