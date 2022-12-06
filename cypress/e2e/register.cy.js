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
    registerPage.register("Viki", "Developer", "vff@gmail.com", "12341234", "12341234");
    cy.url().should("not.include", "/register");
  });

});