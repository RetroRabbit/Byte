const initialState = {
    userName: "",
    userEmail: "",
    userImage: ""
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'GO_TO_REG':

        case 'GO_TO__SECOND_REG':

        case 'GO_TO_THIRD_REG':

        case 'GO_TO_HOME':
            return Object.assign({}, state, {
                react: state.userName = "User name entered"
            })

        default:
            return state
    }
}