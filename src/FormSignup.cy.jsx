import React from 'react'
import { FormSignup } from './components/Register/FormSignup'

describe('<FormSignup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormSignup />)
  })
})