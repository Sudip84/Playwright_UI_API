const testData = require('../Data.json');
const {expect} = require('@playwright/test');

class PlaceOrderPage{

    constructor(page){
        this.page = page;
        this.name = page.locator('#name');
        this.countryName = page.locator('#country');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.placeBtn = page.locator('button[onclick="purchaseOrder()"]');
        this.cityName = page.locator('#city');
        this.confirmBtn = page.locator('.confirm');
    }

    async enterName(){
        await this.name.fill(testData.userName);
        expect(await this.name).toHaveValue(testData.userName);
    }

    async enterCountry(){
        await this.countryName.fill(testData.country);
        expect(await this.countryName).toHaveValue(testData.country);
    }

    async enterCity(){
        await this.cityName.fill(testData.cityName);
        expect(await this.cityName).toHaveValue(testData.cityName);
    }

    async enterCreditCard(){
        await this.creditCard.fill(testData.creditCardNum);
        expect(await this.creditCard).toHaveValue(testData.creditCardNum);
    }

    async enterMonth(){
        await this.month.fill(testData.monthName);
        expect(await this.month).toHaveValue(testData.monthName);
    }

    async enterYear(){
        await this.year.fill(testData.year);
        expect(await this.year).toHaveValue(testData.year);
    }

    async clickOnPlaceBtn(){
        await this.placeBtn.click();
    }

    async orderConfirmation(){
        const message = await this.confirmation.textContent();
        expect(message).toEqual(testData.confirmationMsg);
    }

    async clickToConfirm(){
        await this.confirmBtn.click();
    }

}

module.exports = { PlaceOrderPage };