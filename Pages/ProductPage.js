const {expect} = require('@playwright/test');
const testData = require('../Data.json');

class ProductPage {

    constructor(page){
        this.page = page;
        this.name = page.locator('h2.name');
        this.cartBtn = page.locator('#cartur');
    }

    async selectedProduct(){
        const product = await this.name.textContent();
        expect(product).toEqual(testData.product); 
    }
    async clickToCartBtn(){
        await this.page.getByRole("link", {name : 'Add to cart'}).click();
    }

    async alertMessage(){
        await this.page.on('dialog', dialog => expect(dialog.message()).toContain('Product added.'));
    }

    async clickOnCart(){
        await this.cartBtn.click();
    }
}

module.exports = {ProductPage};