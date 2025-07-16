import Main from "./Main";

class CardRemoveBtn extends Main {
    handler() {

    }

    render() {
        setTimeout(() => this.handler());
        return `
        <button class="remove-btn btn-focus">
          Remove
        </button>
        `
    }
}

export default new CardRemoveBtn();