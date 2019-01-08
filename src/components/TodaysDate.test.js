import React    from 'react';

import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodaysDate from '~/TodaysDate';

Enzyme.configure({ adapter: new Adapter() });

describe("<TodaysDate /> component shallow only methods ", () => {
  it("renders without crashing", () => {

    const wrapper = shallow(<TodaysDate />);
    expect(wrapper).toBe(true)
      // ReactDOM.render(<List />, div);
  });
});
