import React from 'react'
import MainMenu from './components/MainMenu/MainMenu'

describe('<MainMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainMenu />)
  })
})