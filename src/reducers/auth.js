/**
 * Created by Hyungwu Pae on 6/18/17.
 */
/**
 * Created by Hyungwu Pae on 6/12/17.
 */
import * as fromAuth from '../actions/auth';
// import { createSelector } from 'reselect'

const initialState = {
  user: null,
  jwt: null

};

/**
 * Reduces
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromAuth.LOAD_JWT: {
      const jwt = action.payload; // 'dpaosidpoqwkdpqwokdpoqwkdpo'
      return Object.assign({}, state, {jwt});

    }

    case fromAuth.LOAD_USER_INFO: {
      const rawUser = action.payload;
      const user = Object.assign(rawUser, {photoURL: rawUser[rawUser['provider']].image.url});
      return Object.assign({}, state, {user});
      // Object.assign({a:2, b:2, c:3}, {a: 1, c:10, d:2}) = {a:1, b:2, c:10, d:2}
    }

    case fromAuth.EMPTY_AUTH: {
      return initialState;
    }

    default:
      return state;
  }
}

/**
 * Selectors
 */
// const getUser = state => state.user;

var a = 1;
function xxx (input) {
  var output = input * a;

  return output;
}
xxx(3); // 3

a = 2;

xxx(3)

