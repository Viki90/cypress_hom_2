/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

describe("registration test", () => {
  let randomUser = {
    randomEmail: faker.internet.email(),
    randomFirstName:faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomPassword: faker.internet.password()
  }

  beforeEach("visit gallery app", () => {
    cy.visit("/");
    cy.get("a[href='/register']").click();
  });

 

  it("register without password confirmation", () => {
    cy.get("#first-name").type("Viki");
    cy.get("#last-name").type("Developer");
    cy.get("#email").type("viki33333333333333@gmail.com");
    cy.get("#password").type("12341234");
    cy.get("#password-confirmation").type("12341234");
    cy.get("input[type='checkbox']").check();
    cy.get("button").click();
    cy.url().should("not.include", "/register");
  });

});