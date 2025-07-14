import Main from "./Main";

class Filter extends Main {

    handler() {

    }

    render() {
        return `
        <div class="flex max-[376px]:flex-col max-[700px]:flex-col min-[700px]:justify-between items-center gap-y-3">
          <div class="max-[376px]:text-[1.5rem] min-[376px]:text-[1.7rem] font-bold text-[#09153eff] dark:text-[#fbfdfeff]">
            <span>Extensions List</span>
          </div>

          <div class="flex gap-x-2 text-sm text-[#09153eff] dark:text-[#fbfdfeff]">
            <button id="filterAllBtn" class="filter-btn btn-focus">All</button>
            <button id="filterActiveBtn" class="filter-btn btn-focus filter-btn-active">Active</button>
            <button id="filterInactiveBtn" class="filter-btn btn-focus">Inactive</button>
          </div>
        </div>
        `
    }
}

export default new Filter();