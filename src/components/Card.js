import Main from "./Main";

class Card extends Main {

    handler() {

    }

    #UI(extension) {
        return `
        <li id="extensionCard">
          
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