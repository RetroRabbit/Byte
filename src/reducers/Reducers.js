const initialState = {
    userName: "ew",
    password: "wfe",
    userEmail: "",
    userImage: ""
}

export default  (state = initialState, action) => {
    switch (action.type){
        case 'GO_TO_HOME':
            return {
                ...state,
                userName: action.payload.username,
                password: action.payload.password
            }

        case 'GO_REG':
            return Object.assign({}, state, {
                react: state.userName = "User name entered"
            })

        default:
            return state
    }
}