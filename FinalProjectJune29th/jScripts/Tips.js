function show_hide(element) {
    var con = element.parentElement.querySelector(".content");
    if (con.style.display == "") {
        con.style.display = "block";
      } else {
        con.style.display = "";
      }
    element.classList.toggle('open');
  }
  