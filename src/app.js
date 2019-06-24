import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Test, DCL")
  new Vue({
    el: "#app",
    data: {
      items: ["Take out trash", "Do dishes", "Order vegbox"],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push(this.newItem);
        this.newItem = ""
      }
    }
  });
});
