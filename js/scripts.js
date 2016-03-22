$(document).ready(function(){
  $("p#clickHere").click(function() {
    $("ul#cat").prepend("<li>Meow meow</li>");
  });
});
