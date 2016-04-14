import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  pattern: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
  case actionTypes.TABLE_FILTER:
    return setFilter(state, action);
  }
  return state;
}

function setFilter(state, action) {
  const { pattern } = action;
  return { ...state, pattern };
}
