export default class Main {
    select(selector) {
        return document.querySelector(selector);
    }

    selectAll(selector) {
        return document.querySelectorAll(selector);
    }
}