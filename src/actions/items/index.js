import * as actionTypes from '../../constants/actionTypes';

export function setItems(items) {
  return {
    type: actionTypes.ITEMS_SET,
    items,
  };
}