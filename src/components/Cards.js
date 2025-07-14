import store from "../store";
import Main from "./Main";

class Cards extends Main {

    async handler() {
        const { getExtensions } = store.methods;

        await getExtensions()
            .then(() => this.#rerender())
    }

    #UI(value) { 
    return `
      <div class="">
        ${value}
      </div>`
    }

    render() {
        setTimeout(() => this.handler());
        return this.#UI(JSON.stringify(store.variebles.extentions));
    }

    #rerender() {
        this.select("#cards").innerHTML = "";
        this.select("#cards").insertAdjacentHTML("afterbegin", this.#UI(JSON.stringify(store.variebles.extentions)));
    }
}

export default new Cards();