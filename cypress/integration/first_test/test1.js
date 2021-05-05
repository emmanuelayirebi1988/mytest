/// <reference types="cypress" />

    describe("Testing Booking Form",()=>{
        beforeEach(() => {
            cy.visit('http://localhost/project/bookingForm/')
          })
     it("should test all input fields and select options",()=>{
       cy.get("#fname").type("emmanuelayirebi12")
       cy.get("#trip-type").select("round-trip")
       cy.get("#date").type("2022-05-15")
       cy.get("#people-num").type("5")
       cy.get("#comments").type("emmanuelayirebi12")
       cy.get("button").type("{enter}")
       cy.get(5000)


     })

     it("should test only the name input field",()=>{
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.get(5000)
 
 
      })

      
     it("should select only trip-type",()=>{
        cy.get("#trip-type").select("1 way-trip")
        cy.get("button").type("{enter}")
        cy.wait(5000)
 
 
      })

      it("should type only date",()=>{
        cy.get("#date").type("2020-05-15")
        cy.get("button").type("{enter}")
        cy.wait(5000)
 
 
      })


      
     it("should type only people_num",()=>{
        cy.get("#people-num").type("5")
        cy.get("button").type("{enter}")
        cy.wait(5000)
 
 
      })

      it("should type only comments",()=>{
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.wait(5000)
 
 
      })

      it("should test only the name input field and select trip-type",()=>{
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("#trip-type").select("1 way-trip")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should type only comments and type only people_num",()=>{
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("#people-num").type("5")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should test only the name input field and type only comments",()=>{
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it(" should test only the name input field and type only people_num",()=>{
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("#people-num").type("5")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should type only people_num and select trip-type",()=>{
        cy.get("#people-num").type("5")
        cy.get("#trip-type").select("1 way-trip")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should type only comments ,select trip-type and type only people_num",()=>{
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("#trip-type").select("1 way-trip")
        cy.get("#people-num").type("5")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should select trip-type , test only the name input field and type only comments",()=>{
        cy.get("#trip-type").select("1 way-trip")  
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it(" should test only the name input field , type only people_num and type only comments",()=>{
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("#people-num").type("5")
        cy.get("#comments").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })

      it("should type only people_num , select trip-type test only the name input field ",()=>{
        cy.get("#people-num").type("5")
        cy.get("#trip-type").select("1 way-trip")
        cy.get("#fname").type("emmanuelayirebi12")
        cy.get("button").type("{enter}")
        cy.wait(5000)
      })


    })