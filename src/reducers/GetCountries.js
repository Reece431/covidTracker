/*export default as its one reducer per file*/
export default (state = [], action) => {
    switch(action.type){
        case 'GET_COUNTRIES':
            return action.payload;
        default:
            return state
    }
}