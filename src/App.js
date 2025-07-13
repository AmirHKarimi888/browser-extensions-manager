import Label from "./components/Label";

class App {

    select(selector) {
        return document.querySelector(selector);
    }
    render() {
        const UI = `
        <header class="py-10 sm max-[376px]:px-3 max-[651px]:px-16 min-[651px]:px-32">
            ${ Label.render() }
        </header>

        <main>

        </main>

        <footer>

        </footer>
        `
        this.select("#app").innerHTML = "";
        this.select("#app").insertAdjacentHTML("afterbegin", UI);
    }
}

export default new App();