import * as actionTypes from '../../constants/actionTypes';
import sort from './index';

describe('sort reducer', () => {

  describe('TABLE_SORT', () => {

    it('sets a property to sorted', () => {
      const property = 'name';

      const action = {
        type: actionTypes.TABLE_SORT,
        property,
      };

      const initialState = {
        property: '',
        reverse: false,
      };

      const expectedState = {
        property,
        reverse: false,
      };

      const nextState = sort(initialState, action);

      expect(nextState).to.contain(expectedState);
    });

    it('sets a property to reverse sorted when it was already set', () => {
      const property = 'name';

      const action = {
        type: actionTypes.TABLE_SORT,
        property,
      };

      const initialState = {
        property,
        reverse: false,
      };

      const expectedState = {
        property,
        reverse: true,
      };

      const nextState = sort(initialState, action);

      expect(nextState).to.contain(expectedState);
    });

  });

});
