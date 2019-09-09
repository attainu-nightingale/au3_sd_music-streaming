 $('#sidebarCollapse').on('click', function () {
     $('#sidebar').toggleClass('display');
 });

 $('#dismiss').on('click', function () {
     $('#sidebar').removeClass('display');

 });

 $('#main').on('click', function () {
     $('#sidebar').removeClass('display');
 });