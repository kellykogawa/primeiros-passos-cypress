class BuzzPage {

    selectorsList() {
        const selectors = {
            postBox: '.oxd-buzz-post-input',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            postButton: '[type="submit"]'
        }

        return selectors
    }

    postNews(information) {
        cy.get(this.selectorsList().postBox).type(information)
        cy.get(this.selectorsList().postButton).click()
    }
}

export default BuzzPage