import React from 'react'

import Delivery from './components/Delivery/Delivery'

describe('<Delivery />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Delivery />)
  })
})