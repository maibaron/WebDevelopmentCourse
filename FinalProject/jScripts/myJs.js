//מעבר עכבר לוגו
var interval;
function showlogo2(){
    var logo = document.getElementById("logo");
    console.log("logo1");
    logo.src="Images/logo2.png";
}
function showlogo1(){
    var logo = document.getElementById("logo");
    console.log("logo2");
    logo.src="Images/logo1.png";
}

//מעבר עכבר אייקונים
function showRollPapericonImages() {
    var index=0;
    var posibbleImages = ['car_icon.png', 'bunny_icon.png', 'octopus_icon.png'];
    var icon = document.getElementById("rollpapericon");
    icon.style.backgroundImage = "url(Images/" + posibbleImages[index] + ")";
    index++;
    if (index === 3) { index = 0; }
    function func() {
        var icon = document.getElementById("rollpapericon");
        icon.style.backgroundImage = "url(Images/"+posibbleImages[index]+")";
        index++;
        if(index === 3) { index = 0; }
    }
    interval=setInterval(func, 1000);
}

function showRollPapericon(){
    clearInterval(interval);
    var icon = document.getElementById("rollpapericon");
    icon.style.backgroundImage = "url(Images/rollpapericon.png)";
    
}

function showPapericonImages() {
    var index = 0;
    var posibbleImages = ['boat_icon.png', 'dog_icon.png', 'dress_icon.png'];
    var icon = document.getElementById("papericon");
    icon.style.backgroundImage = "url(Images/" + posibbleImages[index] + ")";
    index++;
    if (index === 3) { index = 0; }
    function func() {
        var icon = document.getElementById("papericon");
        icon.style.backgroundImage = "url(Images/" + posibbleImages[index] + ")";
        index++;
        if (index === 3) { index = 0; }
    }
    interval = setInterval(func, 1000);
}

function showPapericon() {
    clearInterval(interval);
    var icon = document.getElementById("papericon");
    icon.style.backgroundImage = "url(Images/papericon.png)";

}

//טיפים
function show_hide(element) {
    var con = element.parentElement.querySelector(".content");
    if (con.style.display == "") {
        con.style.display = "block";
      } else {
        con.style.display = "";
      }
    element.classList.toggle('open');
  }
  
