class httpRequest {

    #uri = new URL("https://66d2fa7e184dce1713ceefab.mockapi.io/extensions/");

    async get(endpoint, filters) {
        let thisUri = new URL(`${this.#uri}/${endpoint}`);

        if (filters) {
            for (let key in filters) {
                thisUri.searchParams.append(key, filters[key]);
            }
        }

        return await fetch(thisUri);
    }

    async put(endpoint, id, body) {
        return await fetch(`${this.#uri}/${endpoint}/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
        })
    }

    async delete(endpoint, id) {
        return await fetch(`${this.#uri}/${endpoint}/${id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' },
        })
    }
}

export default new httpRequest();