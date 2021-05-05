/// <reference types="cypress" />

describe("Testing SignUp Form",()=>{
    beforeEach(() => {
        cy.visit('http://localhost/dashboard/signup/')
      })
 it("should test all input fields and select options",()=>{
   cy.get("#signup").click()
   cy.get("#fname").type("emmanuelayirebi12")
   cy.get("#lname").type("david14")
   cy.get("#email").type("roundtrip@gmail.com")
   cy.get("#password").type("mypasword2")
   cy.get("#submit").click()


 })

 it("should test only the name input field",()=>{
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#submit").click()


  })

  
 it("should input only password",()=>{
    cy.get("#password").type("fakeemail@yahoo.com")
    cy.get("#submit").click()


  })

  it("should type only lname",()=>{
    cy.get("#lname").type("david14")
    cy.get("#submit").click()


  })

  it("should type only email",()=>{
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#submit").click()


  })

  it("should type only signup",()=>{
    cy.get("#signup").click()
    cy.get("#submit").click()


  })


  it("should test only the name input field and type only signup",()=>{
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#signup").click()
    cy.get("#submit").click()


  })

  
 it("should input only password and type only email",()=>{
    cy.get("#password").type("fakeemail@yahoo.com")
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#submit").click()


  })

  it("should type only lname and test only the name input field ",()=>{
    cy.get("#lname").type("david14")
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#submit").click()


  })

  it("should type only email and type only signup ",()=>{
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#signup").click()
    cy.get("#submit").click()

  })

  it("should type only signup and  type only lname",()=>{
    cy.get("#signup").click()
    cy.get("#lname").type("david14")
    cy.get("#submit").click()


  })




  it("should test only the name input field , type only signup and type only email",()=>{
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#signup").click()
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#submit").click()


  })

  
 it("should input only password , type only email and should test only the name input field",()=>{
    cy.get("#password").type("fakeemail@yahoo.com")
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#submit").click()


  })

  it("should type only lname , test only the name input field and input only password ",()=>{
    cy.get("#lname").type("david14")
    cy.get("#fname").type("emmanuelayirebi12")
    cy.get("#password").type("mypasword2")
    cy.get("#submit").click()


  })

  it("should type only email , type only signup and type only lname ",()=>{
    cy.get("#email").type("roundtrip@gmail.com")
    cy.get("#signup").click()
    cy.get("#lname").type("david14")
    cy.get("#submit").click()

  })

  it("should type only signup , type only lname and input only password",()=>{
    cy.get("#signup").click()
    cy.get("#lname").type("david14")
    cy.get("#password").type("mypasword2")
    cy.get("#submit").click()


  })




})