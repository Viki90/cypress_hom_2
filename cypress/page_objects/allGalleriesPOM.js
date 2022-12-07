class AllGalleriesPage {
   get searchInput() {
    return cy.get('.form-control');
   }

   get filtterButton() {
    return cy.get('button.btn.btn-outline-secondary.input-button');
   }

   get allElements() {
    return cy.get('.grid').find('.cell');
   }

   get clickOnElement() {
    return cy.get('.grid').find('.cell').eq(3).contains('bebe');
   }
}

export const allGalleriesPage = new AllGalleriesPage();