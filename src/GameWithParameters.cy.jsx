import React from 'react'
import GameWithParameters from './components/Game/GameWithParameters'

describe('<GameWithParameters />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameWithParameters />)
  })
})