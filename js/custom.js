(function(){
  let navItems = document.querySelectorAll('li');
  
  for (i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {      
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        return;
      }
      desativated();
      this.className = "active";      
    });
  }
  
  function desativated() {
    var el = document.querySelectorAll('li');
    for (var i = 0; i < el.length; i++) {
      if (el[i].classList.contains('active')) {
        el[i].classList.remove('active');
      }
    }
  }
})();
  