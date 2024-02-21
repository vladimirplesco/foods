import Alpine from "alpinejs";
window["Alpine"] = Alpine;

import persist from "@alpinejs/persist";
Alpine.plugin(persist);
  
  Alpine.data("dishes", function () {
   
    return {
      view: this.$persist("dishes"),
      search: this.$persist(""),
      get dishes() {
        return dishes;
      },
    };
  });
  Alpine.start();