import store from "../store";
import Card from "./Card";
import Main from "./Main";
import Spinner from "./Spinner";

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
        `
        <div class="max-[376px]:col-span-1 max-[651px]:col-span-2 min-[651px]:col-span-3 w-full mt-20 grid justify-center items-center">
          ${Spinner.render()}
        </div>
        `
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