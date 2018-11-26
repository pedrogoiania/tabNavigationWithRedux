
export const setHomeTitle = () =>
    (dispatch, getState) => {
        dispatch({
            type: 'SET_HOME_TITLE',
            payload: 'Home title changed'
        })
    }

export const setSearchText = (text) =>
    (dispatch, getState) => {
        dispatch({
            type: 'SET_SEARCH_TEXT',
            payload: text
        })
    }