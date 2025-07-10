const { API_Utils } = require('../API_Util/API_Utils');
const testData = require('../Data.json');
let response;
class Login {
    constructor(request) {
        this.api = new API_Utils(request); 
    }

    
    

    async login(){
        response = await this.api.postMethod(
            testData.baseUrl + "/login",
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
            {
                "x-api-key": "reqres-free-v1"
            }
        )

        return response;
    }

}

module.exports = { Login };
