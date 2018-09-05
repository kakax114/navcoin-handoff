var app = new Vue({
  el: '#app',
  methods: {
    test(){
      var a = document.getElementById("sidebar");
      a.classList.toggle('change');
      
      var b = document.getElementById("plus");
      b.classList.toggle('plus-rotate');
    }
  },
});
