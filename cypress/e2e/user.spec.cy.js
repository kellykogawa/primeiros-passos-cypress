import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import BuzzPage from '../pages/buzzPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()
const buzzPage = new BuzzPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myinfoPage.fillEmployeeDetails('000000', '6789', '54321', '2025-08-22')
    myinfoPage.fillStatus('2000-05-01')
    myinfoPage.saveForm()

    menuPage.accessBuzz()
    
    buzzPage.postNews('Hii')
  })
})