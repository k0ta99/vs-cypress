class ArchiveOrganization{
    get archiveSvg(){
        return cy.get(".vs-c-my-organization__header").find(".vs-c-icon--archive").last()
    }
    get archiveButton(){
        return cy.get(".vs-u-text--right").find("button").last()
    }

    get orgName(){
        return cy.get("h2").first()
    }

    archiveOrg(){
        this.archiveSvg.click({force: true});
        this.archiveButton.click();
    }
}

export const archiveOrganization = new ArchiveOrganization()

