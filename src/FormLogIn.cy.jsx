import React from 'react'
import { FormLogIn } from './components/Profile/FormLogIn'

describe('<FormLogIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormLogIn />)
  })
})