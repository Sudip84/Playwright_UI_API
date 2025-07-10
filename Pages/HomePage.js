const testData = require('../Data.json');
const { expect } = require('@playwright/test');
const { Utils } = require('./Utils');


class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('#login2');
        this.userName = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator('button[onclick="logIn()"]');
        this.welcomeMsg = page.locator('#nameofuser');
        this.productCategory = page.locator('#itemc');
    }

    async onHomePage() {
        await this.page.goto(testData.url);
        await expect(this.page).toHaveTitle(testData.pageTitle);
    }

    async clickOnLoginBtn() {
        await this.loginBtn.click();
    }

    async loginWithValidCredentials() {
        await this.userName.fill(testData.userName); // enter username
        await this.password.fill(testData.password); // enter password
        await this.loginButton.click(); // click on login button
        await this.page.waitForSelector('#nameofuser');
        expect(await this.welcomeMsg.textContent()).toEqual(`Welcome ${testData.userName}`); // validate user login successfully
    }

   async selectProductCategory(){
        await Utils.selectItem(this.productCategory, testData.productCategory); // select product category
   }

   async selectProduct(){
        await this.page.getByRole('link', { name: testData.product }).click(); // select product
   }
    
}

module.exports = { HomePage };    