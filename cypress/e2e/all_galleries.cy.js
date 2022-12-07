/// <reference types="Cypress" />

import { allGalleriesPage } from "../page_objects/allGalleriesPOM";

describe("all galleries test", () => {

  before("visit gallery app", () => {
    cy.visit("/");
  }); 

  it("search functionality", () => {
    allGalleriesPage.searchInput.type("bebe 3");
    allGalleriesPage.filtterButton.click();
    allGalleriesPage.allElements.should('have.length', 10);
    allGalleriesPage.clickOnElement.click();
  });

});