export const getLink = () => {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'GET_SUCCESS_LINK',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'GET_ERROR_USER',
                error
            });
            return error;
        }
        try {
            const url = `https://www.mocky.io/v2/5a6bc16631000078341b8b77`;
            const response = await fetch(url);
            const data = await response.json();
            return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }
}
