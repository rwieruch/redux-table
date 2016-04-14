import * as actionTypes from '../../constants/actionTypes';

export function setFilter(pattern) {
  return {
    type: actionTypes.TABLE_FILTER,
    pattern,
  };
}