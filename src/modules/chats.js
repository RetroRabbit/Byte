
//creating action from getting a chat list
export const getChat = () => {
        console.log("retrieving the chats!!");
        return dispatch => {
                dispatch({
                        type: 'GET_CHAT'
                })
        }
}