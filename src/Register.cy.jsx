import React from 'react'
import Register from './components/Register/Register'

describe('<Register />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Register />)
  })
})