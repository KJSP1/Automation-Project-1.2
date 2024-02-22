
const issueTitle = 'This is an issue of type: Task.';
describe('Issue delete', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
            //open issue detail modal with title from line 16  
            cy.contains(issueTitle).click();
        });
    });

    //issue title, that we are testing with, saved into variable
    const issueTitle = 'This is an issue of type: Task.';

    //add steps to delete issue
    it("Should open an issue and delete it successfully", () => {
        cy.get('[data-testid="modal:issue-details"]').should("be.visible");
        cy.get('[data-testid="icon:trash"]').click();
        cy.get('[data-testid="modal:confirm"]').should("be.visible");
        cy.get('[data-testid="modal:confirm"]').within(() => {
            cy.contains("Are you sure you want to delete this issue?").should(
                "be.visible"
            );
            cy.contains("Once you delete, it's gone for good").should("be.visible");
            cy.contains("Delete issue").click()

            cy.get('[data-testid="modal:confirm"]').should("not.exist");
            cy.get('[data-testid="modal:issue-details"]').should('not.exist');
            cy.contains(issueTitle).should('not.exist');

        });
    });

    it('Should cancel deletion process successfully', () => {
        //add steps to start deletion proces but cancel it

        it("Should cancel issue deletion", () => {
            cy.get('[data-testid="modal:issue-details"]').should("be.visible");
            cy.get('[data-testid="icon:trash"]').click();
            cy.get('[data-testid="modal:confirm"]').should("be.visible");
            cy.get('[data-testid="modal:confirm"]').within(() => {
                cy.contains("Cancel").click();
            });

            cy.get('[data-testid="modal:confirm"]').should("not.exist");
            cy.contains(issueTitle).should('be.visible');

        });
    });
})
