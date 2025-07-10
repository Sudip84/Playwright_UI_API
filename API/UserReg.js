const { API_Utils } = require('../API_Util/API_Utils');
const testData = require('../Data.json');
let response;
class UserReg {
    constructor(request) {
        this.api = new API_Utils(request); 
    }

    
    
    async registerUser() {
         response = await this.api.postMethod(
            testData.baseUrl + "/register",
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
            {
                "x-api-key": "reqres-free-v1"
            }
        );

        return response;
    }

}

module.exports = { UserReg };
