import Main from "./Main";

class LabelThemeBtn extends Main {

    handler() {

        "theme" in localStorage ? null : localStorage.setItem("theme", "light");

        if (localStorage.getItem("theme") === "light") {
            this.select("html").classList.remove("dark");
            this.select("#themeBtn img").src = "./src/assets/images/icon-moon.svg";
        } else {
            this.select("html").classList.add("dark");
            this.select("#themeBtn img").src = "./src/assets/images/icon-sun.svg";
        }

        this.select("#themeBtn").addEventListener("click", () => {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark");
                this.select("html").classList.add("dark");
                this.select("#headerLabel").src = "./src/assets/images/logo-dark.svg";
                this.select("#themeBtn img").src = "./src/assets/images/icon-sun.svg";

            } else if (localStorage.getItem("theme") === "dark") {
                localStorage.setItem("theme", "light");
                this.select("html").classList.remove("dark");
                this.select("#headerLabel").src = "./src/assets/images/logo.svg";
                this.select("#themeBtn img").src = "./src/assets/images/icon-moon.svg";
            }
        })
    }
    render() {
        setTimeout(() => this.handler());
        return `
        <button id="themeBtn" class="btn-focus rounded-lg p-2 cursor-pointer bg-[#edededff] dark:bg-[#2f364bff] hover:bg-[#c7c7c7ff] hover:dark:bg-[#545969ff] duration-100">
          <img src="./src/assets/images/icon-moon.svg" />
        </button>
        `
    }
}

export default new LabelThemeBtn();