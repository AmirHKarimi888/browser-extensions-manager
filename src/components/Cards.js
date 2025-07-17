import store from "../store";
import Card from "./Card";
import Main from "./Main";
import Spinner from "./Spinner";

class Cards extends Main {

    async initiate() {
        await store.methods.getExtensions(store.variebles.filter)
            .then(() => this.rerender());
    }

    handle() {
        this.selectAll(".extension-card-active-switch")
            .forEach((el) => {
                el.addEventListener("click", async () => {
                    let id = el.id.split("_")[1];
                    let selectedExtension = store.variebles.extentions.find(ex => ex.id === id);
                    await store.methods.activeExtension(selectedExtension)
                        .then(() => this.rerender());
            })
        })

        this.selectAll(".extension-card-delete")
            .forEach((el) => {
                el.addEventListener("click", async () => {
                    let id = el.id.split("_")[1];
                    let selectedExtension = store.variebles.extentions.find(ex => ex.id === id);
                    await store.methods.deleteExtension(selectedExtension)
                        .then(() => this.rerender());
            })
        })
    }

    #UI(extensions) {
        return `
          <ul id="extensionCards" class="py-8 grid max-[376px]:grid-cols-1 max-[651px]:grid-cols-2 min-[651px]:grid-cols-3 gap-2">
            ${typeof extensions === "string" ?
                JSON.parse(extensions).map((extension) => {
                    return `${Card.render({ extension: extension })}`
                })
                .join("") : `
                <div class="max-[376px]:col-span-1 max-[651px]:col-span-2 min-[651px]:col-span-3 w-full mt-36 grid justify-center items-center">
                  ${Spinner.render()}
                </div>
                `
            }
          </ul>`
    }

    render() {
        setTimeout(async () => {
            await this.initiate();
        });
        return this.#UI(store.variebles.extentions);
    }

    rerender() {
        setTimeout(() => this.handle());
        this.select("#cards").innerHTML = "";
        this.select("#cards").insertAdjacentHTML("afterbegin", this.#UI(JSON.stringify(store.variebles.extentions)));
    }

    delay() {
        this.select("#cards").innerHTML = "";
        this.select("#cards").insertAdjacentHTML("afterbegin", `<div class="max-[376px]:col-span-1 max-[651px]:col-span-2 min-[651px]:col-span-3 w-full mt-36 grid justify-center items-center">${Spinner.render()}</div>`);
    }
}

export default new Cards();