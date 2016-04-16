import * as actionTypes from '../../constants/actionTypes';
import filter from './index';

describe('items filter', () => {

  describe('TABLE_FILTER', () => {

    it('sets pattern to filter', () => {
      const pattern = 'xyz';

      const action = {
        type: actionTypes.TABLE_FILTER,
        pattern
      };

      const initialState = {
        pattern: ''
      };

      const expectedState = {
        pattern
      };

      const nextState = filter(initialState, action);

      expect(nextState).to.eql(expectedState);
    });

  });

});
