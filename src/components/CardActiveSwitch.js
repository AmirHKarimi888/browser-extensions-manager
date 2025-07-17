import Main from "./Main";

class CardActiveSwitch extends Main {
    #UI(extension) {
        return `
        <div class="relative inline-block">
          <input type="checkbox" class="peer h-6 w-12 cursor-pointer appearance-none rounded-full bg-gray-300 dark:bg-gray-700 checked:bg-[#c7221aff] btn-focus" ${extension.isActive ? "checked" : ""}>
          <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-white transition-all duration-200 peer-checked:left-7 peer-checked:bg-white"></span>
        </div>
        `
    }

    render(props) {
        return this.#UI(props?.extension);
    }

}

export default new CardActiveSwitch();