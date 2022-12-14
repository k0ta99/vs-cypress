/// <reference types="Cypress" />

import {addOrganization} from "../pageObjects/addOrganizationPOM"
import { archiveOrganization } from "../pageObjects/archiveOrganizationPOM"
import {loginPOM} from "../pageObjects/loginPOM"

describe("add organization tests", () =>{
    before("login into the app ", () =>{
        cy.visit("/")
        cy.url().should("include", "/login");
        loginPOM.loginHeading.should("exist")
        .and("have.text", "Log in with your existing account")
        loginPOM.loginButton.should("be.visible")
        .and("have.css", "background-color", 'rgb(78, 174, 147)');
        loginPOM.login(Cypress.env("userEmail"), Cypress.env("userPassword"))
        cy.url().should("not.include", "/login");
    })


    it("archive organization", () =>{
        cy.intercept(
            "PUT",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/23683/status"
        ).as("successfullArchive")

        archiveOrganization.archiveOrg();

        cy.wait("@successfullArchive").then(interception =>{
            expect(interception.response.statusCode).to.eq(200)
        })

        
    })
     
})