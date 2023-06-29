/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Open home page etsydemo.knowband.com", () => {
        cy.visit("/");
    });
});