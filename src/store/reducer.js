const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + action.val
        }
    }
    return state;
};

export default reducer;