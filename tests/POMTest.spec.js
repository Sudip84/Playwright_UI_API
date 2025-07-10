const {test, expect} = require('@playwright/test');
const {POManager} = require('../Pages/POManager');

test('Add Product to cart and place the order', async({page}) =>{
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const productPage = poManager.onProductPage();
    const cartPage = poManager.onCartPage();
    const placeOrderPage = poManager.onPlaceOrderPage();

    // validate user on HomePage
    await homePage.onHomePage();

    // click on Login button
    await homePage.clickOnLoginBtn();

    // Lgoin with valid credentials
    await homePage.loginWithValidCredentials();

    // select product category 
    await homePage.selectProductCategory();

    // select product
    await homePage.selectProduct();

    // Add to Cart
    await productPage.clickToCartBtn();

    // validate aleert message
    await productPage.alertMessage();

    // click on cart button
    await productPage.clickOnCart();

    // validate right product selected and it's displayed on cart page
    await cartPage.validateProduct();

    // click on place order button 
    await cartPage.clickOnPlaceOrderBtn();

    // place order with all user information
    await placeOrderPage.enterName();

    await placeOrderPage.enterCountry();

    await placeOrderPage.enterCity();

    await placeOrderPage.enterCreditCard();

    await placeOrderPage.enterMonth();

    await placeOrderPage.enterYear();

    await placeOrderPage.clickOnPlaceBtn();

    await placeOrderPage.clickToConfirm();
    
})