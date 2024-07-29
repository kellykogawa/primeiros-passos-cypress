describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //entrando na página
    cy.get("[name='username']").type('Admin')  // utilizar o CSS selector para achar atributo único
    cy.get("[name='password']").type('admin123') // utilizar o CSS selector para achar atributo único
    cy.get("[type='submit']").click()  // utilizar o CSS selector para achar atributo único
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //para verificar que será redirecionado a pagina correta, copiar o caminho da URL após .com
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') // na página principal, para saber se está correto, o atributo contendo a palavra "dashboard"
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Bruno')
    cy.get("[name='password']").type('Test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  
  })
})