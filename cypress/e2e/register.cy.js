/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { registerPage } from "../page_objects/registerPOM";

describe("registration test", () => {
  let randomUser = {
    randomEmail: faker.internet.email(),
    randomFirstName:faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomPassword: faker.internet.password()
  }

  before("visit gallery app", () => {
    cy.visit("/");
    registerPage.registerButton.click();
  });

 

  it("register with valid data", () => {
    registerPage.register(randomUser.randomFirstName, randomUser.randomLastName, randomUser.randomEmail, randomUser.randomPassword, randomUser.randomPassword);
    cy.url().should("not.include", "/register");
  });

});