import Alpine from "alpinejs";
window["Alpine"] = Alpine;

import persist from "@alpinejs/persist";
Alpine.plugin(persist);
  
  Alpine.data("foods", function () {
   
    return {
      view: this.$persist("dishes"),
      search: this.$persist(""),

      select: this.$persist([]),
      
      get dishes() {
        const term = this.search.toLowerCase();
        return this.recipes
          .filter((dish) => !this.select.includes(dish.slug))
          .filter((dish) => dish.data.name.toLowerCase().includes(term));
      // },
        // return this.recipes;
      },

      get menu() {
        return this.recipes.filter((dish) => this.select.includes(dish.slug));
      },

      toggleSelect(dish) {
        const index = this.select.indexOf(dish.slug);
        if (index === -1) this.select.push(dish.slug);
        else this.select.splice(index, 1);
      },

    };
  });
  Alpine.start();