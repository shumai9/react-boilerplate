import App from './app'
import React from 'react'
import {shallow} from 'enzyme'
describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div').text()).toBe('Welcome to my React app boiler plate')
    expect(wrapper).toMatchSnapshot()
  })
})
