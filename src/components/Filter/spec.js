import { Filter } from './index';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const pattern = 'xyz';

describe('Filter', () => {

  const props = {
    pattern,
  };

  it('renders', () => {
    const element = shallow(<Filter { ...props } />);

    expect(element.find('.filter')).to.have.length(1);
    expect(element.find('input').prop('value')).to.equal(props.pattern);
  });

  it('onClick ', () => {
    const spy = sinon.spy();
    const element = shallow(<Filter { ...props } setFilter={spy} />);

    element.find('input').simulate('change', { target: { value: pattern } });
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(pattern)).to.be.true;
  });

});
