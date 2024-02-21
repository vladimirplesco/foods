import Alpine from "alpinejs";
window["Alpine"] = Alpine;

import persist from "@alpinejs/persist";
Alpine.plugin(persist);
  
  Alpine.data("dishes", function () {
    return {
      view: this.$persist("dishes"),
      search: this.$persist(""),

      // get dishes() {
      //   const term = this.search.toLowerCase();
      //   return this.dishes
      //     .filter((dish) => !this.select.includes(dish.slug))
      //     .filter((dish) => dish.data.name.toLowerCase().includes(term));
      // },
      // clearImmediatelearAll() {
      //   this.hide = false;
      //   // this.buy = [];
      //   // this.custom = [];
      //   // this.select = [];
      //   // this.search = "";
      // },
  
    };
  });
  Alpine.start();