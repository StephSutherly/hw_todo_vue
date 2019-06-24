import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Test, DCL")
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Take out trash", priority: true},
        {name: "Do dishes", priority: true},
        {name: "Order vegbox", priority: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          priority: true
        });
        this.newItem = "";
      }
    }
  });
});
