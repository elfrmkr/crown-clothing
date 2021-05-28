/* two properties:
1) state object: represents last or initial state to store
2) action -> specific type name
payload: new value, transformation etc.*/

const INITIAL_STATE = {
    currentUser : null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            };
        default: // if none of the actions match
            return state;
    }
};

export default userReducer;