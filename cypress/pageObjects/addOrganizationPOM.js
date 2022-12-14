class AddOrganization{
    get addOrganization(){
        return cy.get(".vs-c-my-organization--add-new");
    }

    get organizationNameInput(){
        return cy.get("input[type='text']");
    }

    get newOrgNextButton(){
        return cy.get("button").eq(1);
    }

    get createOrgButton(){
        return cy.get("button").eq(1);
    }

    addOrganization(orgName){
        addOrganization.click()
        this.organizationNameInput.type(orgName)
        this.newOrgNextButton.click()
        this.createOrgButton.click()
    }
}

export const addOrganization = new AddOrganization()