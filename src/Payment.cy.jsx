import React from 'react'
import Payment from './components/Payment/Payment'

describe('<Payment />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Payment />)
  })
})