import React from 'react'
import { LogIn } from './components/Profile/LogIn'

describe('<LogIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LogIn />)
  })
})