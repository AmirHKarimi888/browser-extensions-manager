import httpRequest from "../server";

const variebles = {
    extentions: []
}

const methods = {
    async getExtensions() {
        try {
            await httpRequest.get("extensions")
            .then(res => res.json())
            .then(data => variebles.extentions = data)
        } catch(err) {
            console.error(err.message);
        }
    }
}

export default { variebles, methods };