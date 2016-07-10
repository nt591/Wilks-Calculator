import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Form from './Form'

describe('<Form />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('contains a select dropdown for gender', () => {
    expect(wrapper.find("select#gender").first())
      .to.have.length(1)
  })

  it('contains a select dropdown for gender with two options', () => {
    expect(wrapper.find("option"))
      .to.have.length(2) 
  })
})