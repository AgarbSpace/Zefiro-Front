///<reference types="cypress" />
import { faker } from "@faker-js/faker"

describe("Login", () =>{
    it("should login successfully", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#email").type(faker.internet.email());
        cy.get("#password").type("123");
        cy.get("#submitLogin").click();
        cy.url().should("equal", "http://localhost:3000/app/main");
    });

    it("should give an login error", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#password").type("123");
        cy.get("#submitLogin").click();
        cy.url().should("equal", "http://localhost:3000/");
        cy.contains("Todos os campos são obrigatórios");
    });
});