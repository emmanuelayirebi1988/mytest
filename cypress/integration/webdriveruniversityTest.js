///<reference types="cypress" />

context("Testing class", ()=>{
    

        beforeEach(() => {
            cy.visit('http://www.webdriveruniversity.com/Click-Buttons/index.html');
        })


      it("First button click",()=>{
        cy.get('#button1').click()
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click()
      
        });

        it("Second button click",()=>{
            
            cy.get('[id="button2"]').click();
            cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            });


            it("Third button click",()=>{
                cy.get('#button3').click();
                cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
            })
    });