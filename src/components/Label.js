import LabelThemeBtn from "./LabelThemeBtn";
import Main from "./Main";

class Label extends Main {

    initiate() {
        if (localStorage.getItem("theme") === "light") {
            this.select("#headerLabel").src = "./src/assets/images/logo.svg";
        } else {
            this.select("#headerLabel").src = "./src/assets/images/logo-dark.svg";
        }
    }
    
    render() {
        setTimeout(() => this.initiate());
        return `
        <div class="w-full p-3 flex justify-between items-center bg-[#fbfdfe] dark:bg-[#212636ff] rounded-2xl shadow-sm dark:shadow-none dark:border">
          <div>
            <img src="./src/assets/images/logo.svg" id="headerLabel" />
          </div>

          <div>
            ${LabelThemeBtn.render()}
          </div>
        </div>
        `
    }
}

export default new Label();