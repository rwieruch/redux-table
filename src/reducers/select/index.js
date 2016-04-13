import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  selectedItems: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
  case actionTypes.TABLE_SELECT:
    return setSelect(state, action);
  }
  return state;
}

function setSelect(state, action) {
  const { id } = action;
  // TODO: do select or deselect
  return { ...state };
}
