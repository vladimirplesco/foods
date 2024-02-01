export default () => ({
  get allDishes() {
    const arr_key = [];
    const arr_val = [];
    const arr_common = {};
    for(let key in allDishes) {
      // arr_key.push(allDishes[key].frontmatter.dish.name);
      // arr_val.push(allDishes[key].frontmatter.dish.foods);
      arr_common[allDishes[key].frontmatter.dish.name] = allDishes[key].frontmatter.dish.foods;
      alert(allDishes[key].frontmatter.dish.name);
    }
    return arr_common;
  },
})