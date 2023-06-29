/// <reference types="cypress" />

describe("Locators", () => {
    it("Locators Part I", () => {
        cy.visit("/");

        // tags
        cy.get("a");

        // id
        cy.get("#search_query_top");

        // class
        cy.get(".form-control");

        // attributes, e.g. name, placeholder ...
        cy.get('[name="search_query"]');
        cy.get('[placeholder="Search"]');

        // precise attribute with the tag
        cy.get('input[placeholder="Search"]');

        // few attributes
        cy.get('[src="https://etsydemo.knowband.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]');

        // recommended practice for retrieving elements
        cy.get('[data-cy="searching"]');

    });

    it.only("Locators Part II", () => {
        cy.visit("/");

        // Content with a text
        cy.contains("Shop now !");

        // Content with a text and attribute
        cy.contains('[title="Contact us"]', 'Contact us');

        // by parent - three ways
        cy.get("li").parents("#home-page-tabs").find("li").first();
        cy.get("li").parents("#home-page-tabs").find("li").eq(1);
        cy.get("li").parents("#home-page-tabs").find("li").contains("Specials");
    });
});