 $('#sidebarCollapse').on('click', function () {
     $('#sidebar').toggleClass('display');
 });

 $('#dismiss').on('click', function () {
     $('#sidebar').removeClass('display');

 });

 $('#main').on('click', function () {
     $('#sidebar').removeClass('display');
 });

$(".overlay").on('click', function(){
    var y = event.target.getAttribute('data');
    player=document.getElementById("audio0");
    player.setAttribute('src',y);
 });
