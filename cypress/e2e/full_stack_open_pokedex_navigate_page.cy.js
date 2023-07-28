describe('Pokedex', function() {
  it('front page navigates to another page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})