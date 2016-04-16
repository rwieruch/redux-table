import * as actionTypes from '../../constants/actionTypes';
import select from './index';

describe('select reducer', () => {

  describe('TABLE_SELECT', () => {

    it('sets an item as selected, when it is not in list', () => {
      const id = 'x';

      const action = {
        type: actionTypes.TABLE_SELECT,
        id
      };

      const initialState = {
        selectedItems: []
      };

      const expectedState = {
        selectedItems: [id]
      };

      const nextState = select(initialState, action);

      expect(nextState).to.eql(expectedState);
    });

    it('sets an item as not selected, when it was selected', () => {
        const id = 'x';

        const action = {
          type: actionTypes.TABLE_SELECT,
          id
        };

        const initialState = {
          selectedItems: [id]
        };

        const expectedState = {
          selectedItems: []
        };

        const nextState = select(initialState, action);

        expect(nextState).to.eql(expectedState);
    });

  });

});
