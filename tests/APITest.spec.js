
const { test, expect } = require('@playwright/test');
const {POManager} = require('../Pages/POManager');
let response;
let resBody;
let token;
test('register user', async ({ page, request }) => {
    const poManager = new POManager(page , request);
    const registerUserAPI = poManager.user();

    response = await registerUserAPI.registerUser();
    resBody = await response.json();
    console.log(resBody);

    // validate status code and fields
    expect(response.status()).toBe(200);
    expect(resBody).toHaveProperty('id');
    expect(resBody).toHaveProperty('token');
})

test('Login with valid user', async ({page, request}) =>{
    const poManager = new POManager(page, request);
    const loginAPI = poManager.loginWithUser();
    
    response = await loginAPI.login();
    resBody = await response.json();

    // validate status code and fileds
    expect(resBody).toHaveProperty('token');
    token = resBody.token;
    console.log("token", token);
})