import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  selectedItems: [],
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
  const index = state.selectedItems.indexOf(id);

  let selectedItems;
  if (index === -1) {
    selectedItems = [ ...state.selectedItems, id ];
  } else {
    selectedItems = [
        ...state.selectedItems.slice(0, index),
        ...state.selectedItems.slice(index + 1)
    ];
  }

  return { ...state, selectedItems };
}
