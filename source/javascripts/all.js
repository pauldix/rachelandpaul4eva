//= require_tree .
$(function() {
  // var windowHeight = $(window).height();
  // $("#our_story").css("margin-top", windowHeight + "px");
  var storyWidth = $(".story").width();
  if (storyWidth < 1111) {
    storyWidth = 1111;
  }
  storyLeft = storyWidth / 2 - 375 - 10;
  storyRight = storyWidth / 2 - 250 + 30;
  picLeft = storyWidth / 2 - 250;
  picRight = storyWidth / 2 - 375 + 30
  // $(".story-left").attr("data-center-top", "left:" + storyLeft + "px;");
  // $(".story-right").attr("data-center-top", "left:" + storyRight + "px;");
  // $(".pic-left").attr("data-center-top", "left:" + picRight + "px;");
  // $(".pic-right").attr("data-center-top", "left:" + picLeft + "px;");

  var s = skrollr.init();
  console.log("DONE!")
});