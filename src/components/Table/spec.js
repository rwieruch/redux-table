import { Table } from './index';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('Table', () => {

  const selectItemSpy = sinon.spy();
  const setSortSpy = sinon.spy();

  const props = {
    items: [{ id: 'x' }, { id: 'y' }],
    selectedItems: ['x'],
    selectItem: selectItemSpy,
    sortProps: {
      property: 'NAME',
      sortFn: () => {},
      reverse: true
    },
    setSort: setSortSpy
  };

  it('renders shallow', () => {
    const element = shallow(<Table { ...props } />);

    expect(element.find('.table')).to.have.length(1);
    expect(element.find('Row')).to.have.length(2);
  });

  it('has one selected item', () => {
    const element = mount(<Table { ...props } />);

    expect(element.find('.is-selected')).to.have.length(1);
  });

  it('has one active sort', () => {
    const element = mount(<Table { ...props } />);

    expect(element.find('.is-active')).to.have.length(1);
  });

  it('has one reverse sort', () => {
    const element = mount(<Table { ...props } />);

    expect(element.find('.fa-chevron-up')).to.have.length(1);
  });

  it('has two sort headers', () => {
    const element = mount(<Table { ...props } />);

    expect(element.find('.cell-header')).to.have.length(2);
  });

  it('triggers set sort when header is clicked', () => {
    const element = mount(<Table { ...props } />);

    element.find('.cell-header').first().simulate('click');
    expect(setSortSpy.calledOnce).to.be.true;
  });

  it('triggers set selected item when row is clicked', () => {
    const element = mount(<Table { ...props } />);

    element.find('.row').first().simulate('click');
    expect(selectItemSpy.calledOnce).to.be.true;
  });

});
