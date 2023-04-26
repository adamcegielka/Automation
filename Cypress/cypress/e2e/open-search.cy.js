/// <reference types="cypress" />

context('Opening the website and search engine', () => {

    // to wykona się przed każdym testem
    beforeEach(() => {
      cy.visit('https://etsydemo.knowband.com/en/')
    })

    it ('Finding product Printed Dress in the search engine', () => {
      cy.get('#search_query_top').type('Printed Dress')
      cy.get('#searchbox > .btn').click()
      cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    })
})