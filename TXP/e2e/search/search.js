 import {Given, When, Then, Background, And} from '@badeball/cypress-cucumber-preprocessor';
 import '@testing-library/cypress/add-commands';
 import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(0)

// // // // // // // // // // // // // Background

Given ('I visit The X Place and travel to events Page', ()=> {
    cy.visit("/").wait(2000) 
});

// // // // // // // // // // // // // Scenario: Search - Search for existing events

When ('I click on search input box', () => {
    cy.get('.css-9op6zc').click()
});

When ('I type a title of an existing event', () => {
    cy.get('.css-nbt25o').should('include.text', 'E3 2023');
    cy.get('[placeholder="Search by title"]').type('E3 2023').should('have.value','E3 2023')
});

Then ('I will see the feed returning an existing event', () => {
    cy.get('.css-nbt25o').should('include.text', 'E3 2023')
});

// // // // // // // // // // // // // Scenario: Search - Search for non-existing events

// When ('I click on search input box', () => {
//     cy.get('.css-9op6zc').click()
// });

When ('I type a title of an non-existing event', () => {
    cy.get('.css-nbt25o').should('not.include.text', 'text');
    cy.get('[placeholder="Search by title"]').type('text').should('have.value','text')
});

Then ('I will see the feed empty state', () => {
    cy.findByText('There are no upcoming events at the moment').should('exist');       
    cy.get('svg[viewBox="0 0 64 64"]')
});

// // // // // // // // // // // // Scenario: Search - Wipe Input 

// When ('I click on search input box', () => {
//     cy.get('.css-9op6zc').click()
// });

When ('I type an event title', () => {
    cy.get('.css-nbt25o').should('include.text','E3 2023').should('include.text','Events name');
    cy.get('[placeholder="Search by title"]').type('E3 2023').should('have.value','E3 2023');
    cy.get('.css-nbt25o').should('include.text','E3 2023').should('not.include.text','Events name')
});

When ('I click on the Cross Icon inside the Input',() =>{
    cy.get('.css-1t4681n').click()
});

Then ('Input content will be wiped and it will return all events', () => {
    cy.get('[placeholder="Search by title"]').should('be.empty');
    cy.get('.css-nbt25o').should('include.text','E3 2023').and('include.text','Events name')
});

// // // // // // // // // // // Scenario: Search - Wipe Input manually

// When ('I click on search input box', () => {
//     cy.get('.css-9op6zc').click()
// });

// When ('I type an event title', () => {
//     cy.get('.css-nbt25o').should('include.text','Jam').should('include.text','Titulo');
//     cy.get('[placeholder="Search by title"]').type('jam');
//     cy.get('.css-nbt25o').should('include.text','Jam').should('not.include.text','Titulo')
// });

When ('I wipe the Input manually', () => {
    cy.get('[placeholder="Search by title"]').clear()
});

// Then ('Input content will be wiped and it will return all events', () => {
//     cy.get('[placeholder="Search by title"]').should('be.empty')
//     cy.get('.css-nbt25o').should('include.text','Jam').should('include.text','Titulo');
// });

// // // // // // // // // // // //  Scenario: Search - Character Validation

// When ('I click on search input box', () => {
//     cy.get('.css-9op6zc').click()
// });

When ('I type alphanumeric characters, special characters and spaces', () =>{
    cy.get('[placeholder="Search by title"]').type('ASD 123 !"·$%&/()=')
});

Then ('I will be able to search for event titles', () =>{
    cy.get('[placeholder="Search by title"]').should('have.value','ASD 123 !"·$%&/()=')
});











// Código de proyecto de Recarga Claro

// beforeEach(() => {
//     cy.visit("/").wait(2000) 
// });

// afterEach (() => {
//     cy.preserveCookieOnce('session_2' , 'session', 'JSESSIONID', 'b34b515f92ad5491be31f2bd57e9fba7', 'test', 'cookie');
//     cy.log('Cookies guardadas')
// });


// When ('A user enter the username {string} and the password {string}', (username,password) =>{
//     cy.get('#username') .type(username);
//     cy.get('#kc-login').click();
//     cy.get('#password') .type(password)
// });

// When ('A user clicks on the login button', ()=>{
//     cy.get('#kc-login').click().wait (2000)
// });

// Then ('A user will be logged in', ()=> {
//     cy.visit('https://qa.claropay.com.ar/Inicio', {timeout: 40000});
    // cy.url().should('contain', 'https://qa.claropay.com.ar/Inicio');
// });

//Scenario: Ingresar a Recarga Claro 

// Given ('A user opens the login page logged', () => {
//     cy.visit("/")
// });

// When ('A user clicks on Recarga Claro', ()=>{
//     cy.get('.r-150rngu > .r-18u37iz > :nth-child(2) > [data-testid]',{ timeout: 30000 }).click()
// });

// Then ('A user sees Recargar Claro section', ()=>{
//     cy.url().should('contain', 'https://qa.claropay.com.ar/RecargarClaro')
// });

//Scenario: Recarga Claro

// When ('A user clicks on "Recarga nueva linea claro" button', ()=>{
//     cy.get('.r-1kihuf0 > .css-1dbjc4n > [data-testid]').click()
// });


// Then ('A user will be receiving a blocked user message', ()=> {
//     cy.findByText('Epic sadface: Sorry, this user has been locked out.').should('exist')         
// })

// Then ('A user will see all elements', () => {
//     cy.get('[data-test="username"]')
//     cy.get('[data-test="password"]')
//     cy.get('[data-test="login-button"]')
//     cy.get('#login_credentials > h4')
//     cy.get('#login_credentials > h4')
//     cy.get('.login_password')
//     cy.get('.login_password').should('have.text','Password for all users:secret_sauce')
//     cy.get ('#login_credentials > h4').should('have.text','Accepted usernames are:')
//     cy.get('#login_credentials').should('have.text', 'Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_user')
// }