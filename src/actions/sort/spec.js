import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

describe('setSort()', () => {

  it('sets an item as selected', () => {
    const property = 'name';
    const sortFn = () => {};

    const expectedAction = {
      type: actionTypes.TABLE_SORT,
      property,
      sortFn
    };

    const action = actions.setSort(property, sortFn);

    expect(action).to.eql(expectedAction);
  });

});
