import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Markup from '../../src/components/Markup.jsx';


test('should embed markup', t => {
  const props  = { content: '<p>test</p>' };
  const wrapper = shallow(<Markup content={props.content} />);

  t.is(wrapper.html(), '<div><p>test</p></div>');
});
