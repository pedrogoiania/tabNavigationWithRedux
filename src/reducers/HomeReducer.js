const INITIAL_STATE = {
    homeTitle: 'Home Title',
    searchText: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_HOME_TITLE':
            return { ...state, homeTitle: action.payload }
        case 'SET_SEARCH_TEXT':
            return { ...state, searchText: action.payload }
        default:
            return (state);
    }
};
