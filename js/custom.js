$(document).ready(function() {

	function counter() {
    var count = setInterval(function(){
      var c = parseInt($('.counter').text());
      $('.counter').text((++c + "%").toString());
      if(c > 100){
        clearInterval(count);
        $("#preloader").addClass("d-none");
        $(".spinner").addClass("d-none");
        $("#home").removeClass("d-none");
        $(".section").removeClass("d-none");
        $(".remove").removeClass("d-none");
        $(".boxes").removeClass("d-none");
      }
    }, 25);
  }

  function myFunction(x) {
  if (x.matches) { // If media query matches
    $("#mobile").removeClass("d-none");
    $(".other").addClass("d-none");
    $("#void").addClass("d-none");
    $("#column").removeClass("col-md-6");
    $("#column").addClass("col-md-12");
  } else {
    $("#mobile").addClass("d-none");
    $(".other").removeClass("d-none");
    $("#void").removeClass("d-none");
    $("#column").removeClass("col-md-12");
    $("#column").addClass("col-md-6");
  }
}

function fhd(y) {
  if (y.matches) { // If media query matches
    $("#mobile").removeClass("d-none");
    $(".other").addClass("d-none");
    $("#void").addClass("d-none");
  }
  else{
    $("#void").addClass("d-none");
  }
}

function edit_icon(c) {
  if (c.matches) { // If media query matches
    $("#icon_edit").addClass("edit_margin");
  }
}

function edit(d) {
  if (d.matches) { // If media query matches
    $("#icon_edit").addClass("edit_margin");
  }
  else{
    $("#icon_edit").removeClass("edit_margin");
  }
}

  var d = window.matchMedia("(max-width: 375px)")
edit(d) // Call listener function at run time
d.addListener(edit) // Attach listener function on state changes

var c = window.matchMedia("(max-width: 320px)")
myFunction(c) // Call listener function at run time
c.addListener(edit_icon) // Attach listener function on state changes

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var y = window.matchMedia("(max-width: 991px)")
fhd(y) // Call listener function at run time
y.addListener(fhd)
counter();

document.getElementById("year").innerHTML = new Date().getFullYear();
});