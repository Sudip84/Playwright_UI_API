class API_Utils {
    constructor(request) {
        this.request = request;
    }

    async postMethod(url, body, headers) {
        const response = await this.request.post(url, {
            data: body,
            headers: headers
        });
        
        return response;
    }
}

module.exports = { API_Utils };
