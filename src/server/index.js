const uri = "https://66d2fa7e184dce1713ceefab.mockapi.io/extensions/";

class httpRequest {

    async get(endpoint) {
        return await fetch(`${uri}/${endpoint}`);
    }

    async put(endpoint, id, body) {
        return await fetch(`${uri}/${endpoint}/${id}`, {
            method: "PUT",
            body: body
        })
    }
}

export default new httpRequest();