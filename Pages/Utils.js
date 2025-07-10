const {expect} = require('@playwright/test');
class Utils {

    constructor(page){
        this.page = page;
    }

    static async selectItem(ele, categoryName) {
        const count = await ele.count();

        for (let i = 0; i < count; i++) {
            const element = ele.nth(i);
            const text = await element.textContent();
            if (text.trim() === categoryName) {
                await element.click();
                break;
            }
        }
    }

    static async validateText(ele, name){
        let found = false;
        const count = await ele.count();

        for(let i = 0; i < count; i++){
            const element = ele.nth(i);
            const text = await element.textContent();
            console.log(text);
            if(text === name){
                found = true;
                break;
            }
        }

        expect(found).toBeTruthy();
    }
}

module.exports = {Utils};
