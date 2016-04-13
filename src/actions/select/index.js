import * as actionTypes from '../../constants/actionTypes';

export function selectItem(id) {
  return {
    type: actionTypes.TABLE_SELECT,
    id,
  };
}