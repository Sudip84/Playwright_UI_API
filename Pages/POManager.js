const { HomePage } = require("./HomePage");
const { ProductPage } = require("./ProductPage");
const { CartPage } = require("./CartPage");
const { PlaceOrderPage } = require("./PlaceOrderPage");
const { UserReg } = require("../API/UserReg");
const { Login } = require("../API/Login");

class POManager {

    constructor(page, request){
        this.page = page;
        this.request = request;
        this.homePage = new HomePage(this.page);
        this.productPage = new ProductPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.registerUser = new UserReg(this.request);
        this.login = new Login(this.request);
    }

    getHomePage(){
        return this.homePage;
    }

    onProductPage(){
        return this.productPage;
    }

    onCartPage(){
        return this.cartPage;
    }

    onPlaceOrderPage(){
        return this.placeOrderPage;
    }

    user(){
        return this.registerUser;
    }

    loginWithUser(){
        return this.login;
    }
       
}

module.exports = {POManager};