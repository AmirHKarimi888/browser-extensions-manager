import store from "../store";
import Card from "./Card";
import Main from "./Main";

class Cards extends Main {

    async handler() {
        const { getExtensions } = store.methods;

        await getExtensions()
            .then(() => this.#rerender())
    }

    #UI(extensions) { 
    if (typeof extensions === "string") {
        console.log(JSON.parse(extensions));
    }
    return `
      <ul id="extensionCards" class="py-8 grid max-[376px]:grid-cols-1 max-[651px]:grid-cols-2 min-[651px]:grid-cols-3 gap-2">
        ${
        typeof extensions === "string" ? 
        JSON.parse(extensions).map((extension) => {
            return `${Card.render({ extension: extension })}`
        })
        .join("") :
        null
        }
      </ul>`
    }

    render() {
        setTimeout(() => this.handler());
        return this.#UI(store.variebles.extentions);
    }

    #rerender() {
        this.select("#cards").innerHTML = "";
        this.select("#cards").insertAdjacentHTML("afterbegin", this.#UI(JSON.stringify(store.variebles.extentions)));
    }
}

export default new Cards();