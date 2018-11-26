
export const setHomeTitle = () =>
    (dispatch, getState) => {
        dispatch({
            type: 'SET_HOME_TITLE',
            payload: 'Home title changed'
        })
    }