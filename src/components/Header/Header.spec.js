import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  // These show up as pending tests
  it('contains a title component with Wilks', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal("Wilks")
  });
  
  it('contains a section menu with the title', () => {
    expect(wrapper.find('section').first().text())
      .to.equal('Wilks Calculator')
  });
})