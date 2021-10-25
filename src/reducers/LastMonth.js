export default (state = [], action) => {
    switch(action.type){
        case 'LAST_MONTH':
            return action.payload;
        default:
            return state;
    }
}