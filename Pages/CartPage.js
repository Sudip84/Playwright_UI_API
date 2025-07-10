const { Utils } = require('./Utils');
const testData = require('../Data.json');

class CartPage {

    constructor(page){
        this.page = page;
        this.productName = page.locator('.success td');
        this.placeOrderBtn = page.locator('.btn-success');
    }

    async validateProduct(){
        await this.page.waitForSelector('.success td');
        await Utils.validateText(this.productName, testData.product);
    }
    
    async clickOnPlaceOrderBtn(){
        await this.page.waitForSelector('.btn-success');
        await this.placeOrderBtn.click();
    }
}

module.exports = {CartPage};