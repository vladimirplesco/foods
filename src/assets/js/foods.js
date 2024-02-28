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
      //   const term = this.search.toLowerCase();
      //   return this.recipes
      //     .filter((dish) => !this.select.includes(dish.slug))
      //     .filter((dish) => dish.data.name.toLowerCase().includes(term));
      // },
        return this.recipes;
      },
    };
  });
  Alpine.start();