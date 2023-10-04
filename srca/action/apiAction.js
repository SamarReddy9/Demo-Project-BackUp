export const fetchUser = userId => {
  return dispatch => {
    dispatch({type: 'FETCH_USER_REQUEST'});

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: 'FETCH_USER_SUCCESS', payload: json});
      })
      .catch(error => {
        dispatch({type: 'FETCH_USER_FAILURE', error});
      });
  };
};
