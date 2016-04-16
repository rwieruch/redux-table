import * as actionTypes from '../../constants/actionTypes';
import items from './index';

describe('items reducer', () => {

  describe('ITEMS_SET', () => {

    it('sets items in a list', () => {
      const someItems = ['x', 'y'];

      const action = {
        type: actionTypes.ITEMS_SET,
        items: someItems
      };

      const initialState = [];

      const expectedState = someItems;

      const nextState = items(initialState, action);

      expect(nextState).to.eql(expectedState);
    });

  });

});
