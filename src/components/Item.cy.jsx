import React from 'react'

import Item from './Item'

describe('<Item />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Item />)
  })
})