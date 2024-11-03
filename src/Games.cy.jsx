import React from 'react'
import Games from './components/Games/Games'

describe('<Games />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Games />)
  })
})