import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
  case actionTypes.ITEMS_SET:
    return setItems(state, action);
  }
  return state;
}

function setItems(state, action) {
  const { items } = action;
  return [ ...state, ...items ];
}
