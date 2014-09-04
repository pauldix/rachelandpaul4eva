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

  $("a").click(function(ev) {
    var i = ev.target.href.indexOf("#");
    if (i != -1) {
      ev.preventDefault();
      var elId = ev.target.href.slice(i, ev.target.href.length)
      var top = $(elId).position().top - 40;
      if(history.pushState) {
          history.pushState(null, null, elId);
      }
      $('html, body').animate({
        scrollTop: top
      }, 2000);
    }
  });

  $("#loading_title p").hide();
  clearInterval(window.loadingIndicator);
  $("html, body").scrollTop(0);
  $("#loading_title").fadeOut(1600);
  $("#loading_cover").fadeOut(800, function() {
    var elId = window.location.hash;
    if (elId) {
            var top = $(elId).position().top - 40;
      $('html, body').animate({
        scrollTop: top
      }, 2000);

    }
  });

  console.log("DONE!");
});