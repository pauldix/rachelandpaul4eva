//= require_tree .
$(function() {
  var s = skrollr.init();
  var homeHeight = $("#home").height();
  $(".wrapper").css("margin-top", homeHeight + "px");
  console.log("DONE!")
});