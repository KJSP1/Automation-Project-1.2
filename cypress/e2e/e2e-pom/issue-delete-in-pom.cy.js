
import IssueModal from "../../pages/IssueModal";

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

  it('Should delete issue successfully', () => {
    //add steps to delete issue
    it("Should delete issue successfully", () => {
      IssueModal.clickDeleteButton();
      IssueModal.confirmDeletion();
      IssueModal.validateIssueVisibilityState(issueTitle, false);
    });



  });

  it('Should cancel deletion process successfully', () => {
    //add steps to start deletion proces but cancel it
    IssueModal.getIssueDetailModal().should("be.visible");
    IssueModal.clickDeleteButton();
    IssueModal.cancelDeletion();
    IssueModal.closeDetailModal();
    IssueModal.validateIssueVisibilityState(issueTitle, true);
  });
});

//issue title, that we are testing with, saved into variable
const issueTitle = "This is an issue of type: Task.";

it.only("Should delete issue successfully", () => {
  //add steps to delete issue
  IssueModal.clickDeleteButton();
  IssueModal.confirmDeletion();
  IssueModal.validateAmountOfIssuesInBacklog(3);
  IssueModal.ensureIssueIsNotVisibleOnBoard(issueTitle);
});

it.only("Should cancel deletion process successfully", () => {
  //add steps to start deletion proces but cancel it
  IssueModal.clickDeleteButton();
  IssueModal.cancelDeletion();
  IssueModal.closeDetailModal();
  IssueModal.validateAmountOfIssuesInBacklog(4);
  IssueModal.ensureIssueIsVisibleOnBoard(issueTitle);
});