import React from 'react'
import Order from './components/Order/Order'

describe('<Order />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Order />)
  })
})