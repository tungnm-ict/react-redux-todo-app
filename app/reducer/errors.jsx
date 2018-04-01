var errorReducer = (state = '', action) => {
    switch (action.type) {
        case "ERRORS":
            return  action.errors;
        default:
            return state;
    } 
}

module.exports = errorReducer;