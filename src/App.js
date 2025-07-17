import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Label from "./components/Label";

class App {

    select(selector) {
        return document.querySelector(selector);
    }

    handle() {

    }
    render() {
        const UI = `
        <header class="py-10 max-[376px]:px-3 max-[651px]:px-16 min-[651px]:px-32">
            <div>
              ${ Label.render() }
            </div>
        </header>

        <main class="max-[376px]:px-3 max-[651px]:px-16 min-[651px]:px-32">
          <div>
            ${ Filter.render() }
          </div>
          <div id="cards" class="">
            ${ Cards.render() }
          </div>
        </main>

        <footer class="max-[376px]:px-3 max-[651px]:px-16 min-[651px]:px-32">

        </footer>
        `
        this.select("#app").innerHTML = "";
        this.select("#app").insertAdjacentHTML("afterbegin", UI);
    }
}

export default new App();