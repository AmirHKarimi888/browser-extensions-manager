import Main from "./Main";

class CardRemoveBtn extends Main {
    render() {
        return `
        <button class="remove-btn btn-focus">
          Remove
        </button>
        `
    }
}

export default new CardRemoveBtn();