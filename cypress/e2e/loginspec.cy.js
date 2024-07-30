describe('Orange HRM Tests', () => {

  const selectorsList = {  //Criar objetos, pois se alguém alterar o username para email por ex, vai ter que alterar o código
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //entrando na página
    cy.get(selectorsList.usernameField).type('Admin')  // utilizar o CSS selector para achar atributo único
    cy.get(selectorsList.passwordField).type('admin123') // utilizar o CSS selector para achar atributo único
    cy.get(selectorsList.loginButton).click()  // utilizar o CSS selector para achar atributo único
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //para verificar que será redirecionado a pagina correta, copiar o caminho da URL após .com
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard') // na página principal, para saber se está correto, o atributo contendo a palavra "dashboard"
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  
  })
})