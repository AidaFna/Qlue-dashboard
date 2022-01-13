const initialState = []

const postData = (state = initialState, action) => {
    if(action.type === 'SET_POST'){
        return action.payload
    }

    return state
}

export default postData