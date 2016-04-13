import { combineReducers } from 'redux';
import items from './items';
import select from './select';

export default combineReducers({
    items,
    select,
});
