import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

describe('setItems()', () => {

  it('sets items as initial state', () => {
    const items = [{ name: 'x' }, { name: 'y' }];

    const expectedAction = {
      type: actionTypes.ITEMS_SET,
      items
    };

    const action = actions.setItems(items);

    expect(action).to.eql(expectedAction);
  });

});
