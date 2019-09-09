$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('display');
});

$('#dismiss').on('click', function () {
    $('#sidebar').removeClass('display');

});

$('#main').on('click', function () {
    $('#sidebar').removeClass('display');
});

$('#plus').on("click", function () {
    console.log("it's working")
})