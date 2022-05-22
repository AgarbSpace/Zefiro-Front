///<reference types="cypress" />
import { faker } from "@faker-js/faker"

describe("SignUp", () => {
    it("should give an successfuly signUp", () => {
        cy.visit("http://localhost:3000/signUp");
        cy.get("#name").type(faker.name.findName());
        cy.get("#cpf").type(faker.random.numeric(11));
        cy.get("#email").type(faker.internet.email());
        cy.get("#password").type("123");
        cy.get("#confirmPassword").type("123");
        cy.get("#submitButton").click();
        cy.url().should("equal", "http://localhost:3000/");
    });

    it("should give an error when password and confirm password are differents", () => {
        cy.visit("http://localhost:3000/signUp");
        cy.get("#name").type(faker.name.findName());
        cy.get("#cpf").type(faker.random.numeric(11));
        cy.get("#email").type(faker.internet.email());
        cy.get("#password").type("123");
        cy.get("#confirmPassword").type("12");
        cy.get("#submitButton").click();
        cy.url().should("equal", "http://localhost:3000/signUp");
        cy.contains("As senhas não conferem");
    });

    it("should give an error when a field is empty", () => {
        cy.visit("http://localhost:3000/signUp");
        cy.get("#name").type(faker.name.findName());
        cy.get("#cpf").type(faker.random.numeric(11));
        cy.get("#password").type("123");
        cy.get("#confirmPassword").type("123");
        cy.get("#submitButton").click();
        cy.url().should("equal", "http://localhost:3000/signUp");
        cy.contains("Todos os campos são obrigatórios");
    });

});