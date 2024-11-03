import React from 'react'

import Contacts from './components/Contacts/Contacts'

describe('<Contacts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contacts />)
  })
})