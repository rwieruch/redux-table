import * as actionTypes from '../../constants/actionTypes';

export function setSort(property, sortFn) {
  return {
    type: actionTypes.TABLE_SORT,
    property,
    sortFn
  };
}