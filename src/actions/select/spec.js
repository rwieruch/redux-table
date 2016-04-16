import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

describe('selectItem()', () => {

  it('sets an item as selected', () => {
    const id = 'x';

    const expectedAction = {
      type: actionTypes.TABLE_SELECT,
      id
    };

    const action = actions.selectItem(id);

    expect(action).to.eql(expectedAction);
  });

});
