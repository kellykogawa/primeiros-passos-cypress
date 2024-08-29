import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import BuzzPage from '../pages/buzzPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()
const buzzPage = new BuzzPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.word(), chance.last())
    myinfoPage.fillEmployeeDetails(chance.natural({min: 1000 , max: 9999}), chance.natural({min: 1000 , max: 9999}), chance.natural({min: 1000 , max: 9999}), '2050-11-25')
    myinfoPage.fillStatus('2000-05-01')
    myinfoPage.saveForm()

    menuPage.accessBuzz()
    
    buzzPage.postNews(chance.sentence({ words: 5 }))
  })
})