import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  sortFn: (items) => items,
  property: '',
  reverse: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case actionTypes.TABLE_SORT:
    return setSort(state, action);
  }
  return state;
}

function setSort(state, action) {
  const { property, sortFn } = action;
  const reverse = state.property === property && !state.reverse;

  const extendedSortFn = reverse ? (items) => sortFn(items).reverse() : (items) => sortFn(items);

  return { ...state, sortFn: extendedSortFn, property, reverse };
}
