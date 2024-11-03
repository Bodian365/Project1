import React from 'react'
import Rules from './components/Rules/Rules'

describe('<Rules />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Rules />)
  })
})