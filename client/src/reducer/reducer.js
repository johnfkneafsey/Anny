import update from 'immutability-helper';
import * as actions from '../actions/actions';
import store from '../store';

const initialState = {

};
export const appReducer = (state = initialState, action) => {

//   if (action.type === "FETCH_MEMBERDAPPS_SUCCESS"){

//     setTimeout(()=> { console.log(store.getState(), "FETCH_MEMBERDAPPS_SUCCESS")}, 3000);

//     return update(state, {
//      dappList:{$set: action.dappArray},
//      isFetched:{$set: true}
//     })
//   }


  return state;
}
