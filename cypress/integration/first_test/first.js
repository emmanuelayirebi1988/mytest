/// <reference types="cypress" />

describe("Testing class", ()=>{
    it("use keyboard input",()=>{
        cy.visit('http://localhost/project/Website-Practice/');
        
        // cy .visit("http://www.google.com/");
        // cy.get(".gLFyf").type("software testing{enter}");
        // cy.url().should('include',"software");
        // cy.scrollTo("bottom")
        // cy.wait(3000);
        // cy.scrollTo("top")

        // cy.go("back");

        // cy.wait(5000);
        // cy.go("forward");

        cy.click('Login');
        cy.url().should('not.include', 'login');
        cy.log('Login successful');


        Cypress.Commands.add('setSessionStorage', (key, value) => {
            // Turn off logging of the cy.window() to command log
            cy.window({ log: false }).then((window) => {
              window.sessionStorage.setItem(key, value)
            })
          
            const log = Cypress.log({
              name: 'setSessionStorage',
              // shorter name for the Command Log
              displayName: 'setSS',
              message: `${key}, ${value}`,
              consoleProps: () => {
                // return an object which will
                // print to dev tools console on click
                return {
                  Key: key,
                  Value: value,
                  'Session Storage': window.sessionStorage,
                }
              },
            })
        })



    })
})