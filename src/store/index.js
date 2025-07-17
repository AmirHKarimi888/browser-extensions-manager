import httpRequest from "../server";

const variebles = {
    extentions: [],
    filter: ""
}

const methods = {
    async getExtensions(filters) {
        try {
            await httpRequest.get("extensions", filters)
                .then(res => res.json())
                .then(data => variebles.extentions = data)
        } catch (err) {
            console.error(err.message);
        }
    },
    async activeExtension(extension) {
        variebles.extentions.filter(ex => {
            if (ex.id === extension?.id) {
                ex.isActive = !extension?.isActive;
            }
        })

        if (variebles.filter) {
            variebles.extentions = variebles.extentions.filter(ex => {
                for (let key in variebles.filter) {
                    if (ex[key] === variebles?.filter[key]) {
                        return ex;
                    }
                }
            })
        }
        try {
            await httpRequest.put("extensions", extension?.id, {
                "isActive": !extension?.isActive
            })

        } catch (err) {
            console.error(err.message);
        }
    },
    async deleteExtension(extension) {
        variebles.extentions = variebles.extentions.filter(ex => {
            if (ex.id !== extension?.id) {
                return ex;
            }
        })
        try {
            await httpRequest.delete("extensions", extension?.id)
        } catch (err) {
            console.error(err.message);
        }
    }
}

export default { variebles, methods };