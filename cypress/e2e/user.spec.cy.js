import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myinfoPage.fillEmployeeDetails('1234', '6789', '54321', '2025-10-26')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
  })
})