import store from "../store";
import Cards from "./Cards";
import Main from "./Main";

class Filter extends Main {

  handle() {
    this.select("#filterAllBtn").addEventListener("click", async () => {
      store.variebles.filter = "";
      Cards.delay();
      await store.methods.getExtensions(store.variebles.filter)
        .then(() => {
          Cards.rerender();
          this.select("#filterAllBtn").classList.add("filter-btn-active");
          this.select("#filterActiveBtn").classList.remove("filter-btn-active");
          this.select("#filterInactiveBtn").classList.remove("filter-btn-active");
        });
    })

    this.select("#filterActiveBtn").addEventListener("click", async () => {
      store.variebles.filter = { ...{ isActive: true } };
      Cards.delay();
      await store.methods.getExtensions(store.variebles.filter)
        .then(() => {
          Cards.rerender();
          this.select("#filterAllBtn").classList.remove("filter-btn-active");
          this.select("#filterActiveBtn").classList.add("filter-btn-active");
          this.select("#filterInactiveBtn").classList.remove("filter-btn-active");
        });
    })

    this.select("#filterInactiveBtn").addEventListener("click", async () => {
      store.variebles.filter = { ...{ isActive: false } };
      Cards.delay();
      await store.methods.getExtensions(store.variebles.filter)
        .then(() => {
          Cards.rerender();
          this.select("#filterAllBtn").classList.remove("filter-btn-active");
          this.select("#filterActiveBtn").classList.remove("filter-btn-active");
          this.select("#filterInactiveBtn").classList.add("filter-btn-active");
        });
    })

  }

  render() {
    setTimeout(() => this.handle());
    return `
        <div class="flex max-[376px]:flex-col max-[700px]:flex-col min-[700px]:justify-between items-center gap-y-3">
          <div class="max-[376px]:text-[1.5rem] min-[376px]:text-[1.7rem] font-bold text-[#09153eff] dark:text-[#fbfdfeff]">
            <span>Extensions List</span>
          </div>

          <div class="flex gap-x-2 text-sm text-[#09153eff] dark:text-[#fbfdfeff]">
            <button id="filterAllBtn" class="filter-btn btn-focus filter-btn-active">All</button>
            <button id="filterActiveBtn" class="filter-btn btn-focus">Active</button>
            <button id="filterInactiveBtn" class="filter-btn btn-focus">Inactive</button>
          </div>
        </div>
        `
  }
}

export default new Filter();