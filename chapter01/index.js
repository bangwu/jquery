$(document).ready(function(){
  $(".has_children").click(function(){
    $(this).addClass("highlight").children("a").show().end().siblings().removeClass("highlight").children("a").hide();
    $(this).addClass("highlight").children("div").show().end().siblings().removeClass("highlight").children("div").hide();
  });
});
