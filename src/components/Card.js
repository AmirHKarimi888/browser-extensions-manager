import CardActiveSwitch from "./CardActiveSwitch";
import CardRemoveBtn from "./CardRemoveBtn";
import Main from "./Main";

class Card extends Main {

    handler() {

    }

    #UI(extension) {
        return `
        <li id="extensionCard" class="p-3 bg-[#fbfdfe] dark:bg-[#212636ff] text-[#09153eff] dark:text-[#fbfdfeff] rounded-xl shadow-sm dark:shadow-none dark:border dark:border-gray-700 flex flex-col justify-between gap-8">
          <div class="flex gap-3 items-start">
            <div>
              <img src="${extension?.logo}" />
            </div>

            <div class="grid m-[-5px]">
              <div class="font-bold text-[1rem] pt-0">
                ${extension?.name}
              </div>
              <div class="text-[0.8rem] text-[#545969ff] dark:text-[#c7c7c7ff]">
                ${extension?.description}
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div>
              ${CardRemoveBtn.render()}
            </div>

            <div>
              ${CardActiveSwitch.render()}
            </div>
          </div>
        </li>
        `
    }

    render(props) {
        setTimeout(() => this.handler());
        return this.#UI(props?.extension);
    }

    rerender() {

    }
}

export default new Card();