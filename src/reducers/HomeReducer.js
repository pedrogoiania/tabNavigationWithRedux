const INITIAL_STATE = {
    homeTitle: 'Home Title'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_HOME_TITLE':
            return { ...state, homeTitle: action.payload }
        default:
            return (state);
    }
};
