class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]'
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage