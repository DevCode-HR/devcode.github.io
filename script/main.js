window.addEventListener('resize', function(event){
  var newWidth = window.innerWidth;
  var element = document.getElementById("about");
  var about_img = document.getElementById("about-img");
  if(newWidth <= 1200) {
    element.classList.remove("col-7");
    element.classList.add("col-11");
    about_img.classList.remove("col-5");
  } else {
    element.classList.remove("col-11");
    element.classList.add("col-7");
    about_img.classList.add("col-5")
  }
});
window.addEventListener("load", function(event){
  var newWidth = window.innerWidth;
  var element = document.getElementById("about");
  var about_img = document.getElementById("about-img");
  if(newWidth <= 1200) {
    element.classList.remove("col-7");
    element.classList.add("col-11");
    about_img.classList.remove("col-5");
  } else {
    element.classList.remove("col-11");
    element.classList.add("col-7");
    about_img.classList.add("col-5")
  }
});
document.getElementById('files').onchange = function() {
  var element = document.getElementById("file-label");
  element.textContent = document.getElementById("files").value;
};

function scrollDiv(value) {
  var elmnt = document.getElementById(value);
  elmnt.scrollIntoView();
}

function submit() {
  var element = document.getElementById("file-label");
  element.textContent = "select Resume";
  document.getElementById("mail").value = "";
  document.getElementById("name").value = "";
}

window.setInterval(function() {
  // var previous_file = new File(['foo'], 'file.txt', {type: 'text/plain'});
  // try{
  //   previous_file.name = 'hello.txt';
  // }
  // catch(e){}
  // console.log(previous_file.name); // didn't work
  
  // // so we just create a new File from it...
  // var new_file = new File([previous_file], 'hello.txt');
  // console.log(new_file);
}, 1000);