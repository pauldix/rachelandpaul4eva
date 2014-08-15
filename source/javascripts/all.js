//= require_tree .
$(window).load(function() {
  var s = skrollr.init();

  $(".images .circular").on("click", function(ev) {
    $(ev.target).siblings().removeClass("selected");
    $(ev.target).addClass("selected");
    var offset = $(ev.target).attr("data-offset") * 500 * -1;
    $(ev.target).parent().next().children().animate({"margin-left": offset});
    console.log("CLICK");
  });
  console.log("DONE!");
});