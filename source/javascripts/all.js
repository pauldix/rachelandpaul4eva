//= require_tree .


$(window).load(function() {
  $(".content-heading h2").each(function(i, el) {
    var e = $(el);
    e.parent().width(e.width() + 124);
  });

  $("h2 a").hover(function(ev) {
    console.log("hover");
    window.ev = ev;
    var nav = $(ev.target).attr("data-nav");
    if (nav != "") {
      clearTimeout(window.navHide);
      $(".nav-sub").hide();
      var menu = $("ul." + nav);
      menu.css({top: "55px", left: $(ev.target).position().left});
      if (nav == "nola") {
        $(menu).width("140px");
      } else {
        $(menu).width($(ev.target).width());        
      }
      menu.slideDown();
    }
  }, function(ev) {
    window.navHide = setTimeout(function() {
      $(".nav-sub").hide();
    }, 300);
    console.log("leave")
  });

  $(".nav-sub").hover(function(ev) {
    clearTimeout(window.navHide);
  }, function(ev) {
    $(".nav-sub").hide();
  });

  var s = skrollr.init();

  $(".images .circular").on("click", function(ev) {
    $(ev.target).siblings().removeClass("selected");
    $(ev.target).addClass("selected");
    var offset = $(ev.target).attr("data-offset") * 500 * -1;
    $(ev.target).parent().next().children().animate({"margin-left": offset});
  });

  var getTopOffset = function(elId) {
    var el = $(elId);
    var topMargin = el.css("marginTop").replace('px', '');
    var topPadding = el.css("paddingTop").replace('px', '');
    console.log("* ", topMargin, topPadding);
    var headingHeight = 80;
    var positionOffset = headingHeight - topMargin - topPadding;
    return el.position().top - positionOffset;
  };

  $("a").click(function(ev) {
    var i = ev.target.href.indexOf("#");
    if (i != -1) {
      ev.preventDefault();
      var elId = ev.target.href.slice(i, ev.target.href.length)
      var top = getTopOffset(elId);
      $(".nav-sub").hide();
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
  $("#foo, #progress").fadeOut(800, function() {
    var elId = window.location.hash;
    if (elId) {
      var top = getTopOffset(elId);
      $('html, body').animate({
        scrollTop: top
      }, 2000);

    }
  });

  console.log("DONE!");
});