import React from 'react'
import { SignUp } from './components/Register/SignUp'

describe('<SignUp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignUp />)
  })
})