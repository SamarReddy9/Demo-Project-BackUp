import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {count: 0, apiData: null, postData: null};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {...state, count: state.count + 1};
    case 'DEC':
      return {...state, count: state.count + 1};
    case 'RES':
      return {...state, count: 0};
    case 'API':
      return {...state, apiData: action.paylod};
    case 'POST':
      return {...state, postData: action.paylod};
    default:
      return state;
  }
};

const store = createStore(counter, applyMiddleware(thunk));

const fetchData = () => {
  return dispatch => {
    axios
      .get('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts')
      .then(res => {
        dispatch({type: 'API', paylod: res.data});
      })
      .catch(error => console.log('error'));
  };
};

store.dispatch(fetchData());

const postData = (title, body) => {
  return dispatch => {
    axios
      .post('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts', {
        title,
        body,
      })
      .then(res => {
        dispatch(fetchData());
      })
      .catch(error => console.log('error'));
  };
};

export {store, postData};

export default store;
