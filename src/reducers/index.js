import { combineReducers } from 'redux';
import items from './items';
import select from './select';
import filter from './filter';

export default combineReducers({
    items,
    select,
    filter,
});
