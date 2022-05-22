///<reference types="cypress" />
import { faker } from "@faker-js/faker"

describe("signOut", () =>{
    it("should sign out successfully", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#email").type(faker.internet.email());
        cy.get("#password").type("123");
        cy.get("#submitLogin").click();
        cy.url().should("equal", "http://localhost:3000/app/main");
        cy.get("#signOutButton").click();
        cy.url().should("equal", "http://localhost:3000/");
    });
});