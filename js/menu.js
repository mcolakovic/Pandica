$(".topnavlink").hide();

$(document).ready(function () {
  var width = $(window).width();
  if (width > 1080) {
      $(".topnavlink").show();
  }
});

$("img.close").click(function(){
  $(".topnavlink").hide();
});

$(".menu").click(function(){
  $(".topnavlink").show();
});