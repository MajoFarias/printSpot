 //slide Menu * *
 $(".button-collapse").sideNav();
//collapsible * *
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
//paralax
   $(document).ready(function(){
      $('.parallax').parallax();
    });    
//dropdown
$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
}
);
         
//carousel
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
        
$('.mapFull').click(function () {
    $('.mapFull iframe').css("pointer-events", "auto");
});        