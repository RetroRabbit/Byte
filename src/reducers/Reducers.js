const initialState = {
    userName: "",
    userEmail: "",
    userImage: ""
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'GO_TO_REG':
            
            console.log("Clicked to go to registration page");

        case 'GO_TO__SECOND_REG':
            console.log("Clicked to go to second registration page");
        case 'GO_TO_THIRD_REG':
            console.log("Clicked to go to third registration page");
        case 'GO_TO_HOME':
            console.log("Clicked to go to home page");
            return Object.assign({}, state, {
                react: state.userName = "User name entered"
            })

        default:
            return state
    }
}