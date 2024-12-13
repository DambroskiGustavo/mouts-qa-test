/// <reference types="cypress" />

import loc from "../support/locators"

describe('should test at a functional level', () => {
    
    before(() => {
        cy.login()
    })

    /*afterall(() => {
        cy.logout()
    })*/

    it('Should create an user', () => {
        /* During this step, we'll register a new user */
        cy.get(loc.MENU.REGISTER_USERS)
            .click()
        cy.get(loc.USERS.NAME)
            .type('Tester User')
        cy.get(loc.USERS.EMAIL)
            .type('mouts_user@test.com')
        cy.get(loc.USERS.PASSWORD)
            .type('RS2001data!')
        cy.get(loc.USERS.ADM_CHECK)
            .click()
        cy.get(loc.USERS.BTN_USER_REGISTER)
            .click()
        /* After to confirm the register, we'll be redirect to page user list */
    })

    it('Should create a product', () => {
        /* During this step, we'll register a new product */
        cy.get(loc.MENU.REGISTER_PRODUCTS)
            .click()
        cy.get(loc.PRODUCTS.PRD_NAME)
            .type('Iphone 16 Pro 256gb')
        cy.get(loc.PRODUCTS.PRD_PRICE)
            .type('1100')
        cy.get(loc.PRODUCTS.PRD_DESCRIPTION)
            .type('iPhone 16 Pro is splash, water, and dust resistant')
        cy.get(loc.PRODUCTS.PRD_QUANTITY)
            .type('6')
        cy.get(loc.PRODUCTS.PRD_IMAGE)
            .selectFile('image-iphone16pro.png')
        cy.get(loc.PRODUCTS.PRD_BTN_SAVE_CONFIRM)
            .click()
        /*After to confirm the register, we'll be redirect to page products list */
    })

    it('Should delete the product', () => {
        /* During this step, we'll find and delete the previously product registered */
        cy.get(loc.MENU.PRODUCTS_LIST).click()
        cy.get('tr:contains(Iphone 16 Pro 256gb)')
            .find('td:contains(Excluir)')
            .click()
        cy.get('tr:contains(Iphone 16 Pro 256gb)')
            .should('be.visible')
        cy.get('tr:contains(Iphone 16 Pro 256gb)')
            .should('not.be.visible')
        /* It should not be possible to view the product again in the list */
    })
    
})