$(document).ready(function(){
  // sticky menu
  $('.js-service-section').waypoint(function(direction){
    if (direction=="down") {
      $('nav').addClass('sticky');
    }else {
      $('nav').removeClass('sticky');
    }
  });
  // remove active class
  $("nav ul li a").click(function () {
      $("nav ul li a").removeClass("active"), $(this).addClass("active");
  }),
  $("nav a img.logo").click(function () {
      $("nav ul li a").removeClass("active"), $("nav ul li:first-child a").addClass("active");
  });

   // smooth scroll for edge and safari
   $("a").on("click", function (a) {
       if ("" !== this.hash) {
           a.preventDefault();
           var t = this.hash;
           $("html, body").animate({ scrollTop: $(t).offset().top }, 800, function () {
               window.location.hash = t;
           });
       }
   });

  // mix it up portfoliosection
 var mixer = mixitup('.conatiner');

});
function opennav() {
  document.getElementById('mynav').style.width = '100%';
}
function closenav() {
  document.getElementById('mynav').style.width = '0';
}
