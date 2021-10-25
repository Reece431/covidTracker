export default (state = {}, action) => {
    switch(action.type){
        case 'COUNTRY_COVID':
            return action.payload;
        default:
            return state;
    }
}