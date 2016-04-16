import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

describe('setFilter()', () => {

  it('sets a string as pattern which will be used to apply a filter', () => {
    const pattern = 'some query';

    const expectedAction = {
      type: actionTypes.TABLE_FILTER,
      pattern
    };

    const action = actions.setFilter(pattern);

    expect(action).to.eql(expectedAction);
  });

});
