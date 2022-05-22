///<reference types="cypress" />
import { faker } from "@faker-js/faker"

describe("User flow", () =>{
    it("should do all flow successfully", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#email").type(faker.internet.email());
        cy.get("#password").type("123");
        cy.get("#submitLogin").click();
        cy.url().should("equal", "http://localhost:3000/app/main");
        cy.contains("Reability").click();
        cy.contains("Valor");
        cy.contains("Endereço");
        cy.contains("Horários");
        cy.get("#submitButton").click();
        cy.url().should("equal", "http://localhost:3000/app/payment");
        cy.get("#submitButton").click();
        cy.url().should("equal", "http://localhost:3000/app/checkout?cardNumber=&name=&expiration=&cvv=");
        cy.contains("Revisão");
        cy.get("#submitButton").click();
        cy.contains("Obrigado");
        cy.get("#backToHome").click();
        cy.url().should("equal", "http://localhost:3000/app/main");
    });
});