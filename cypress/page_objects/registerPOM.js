class RegisterPage {
    get registerButton() {
        return cy.get("a[href='/register']");
    }

    get firstNameInput() {
        return cy.get("#first-name");
    }

    get lastNameInput() {
        return cy.get("#last-name");
    }

    get emailInput() {
        return cy.get("#email");
    }

    get passwordInput() {
        return cy.get("#password");
    }

    get confirmPasswordInput() {
        return cy.get("#password-confirmation");
    }

    get acceptTermsAndConditions() {
        return cy.get("input[type='checkbox']");
    }

    get submitButton() {
        return cy.get("button");
    }

    register(firstName, lastName, email, password, confirmPassword) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.confirmPasswordInput.type(confirmPassword);
        this.acceptTermsAndConditions.check();
        this.submitButton.click();
    }
}

export const registerPage = new RegisterPage();