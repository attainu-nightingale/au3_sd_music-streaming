$(".delete").on("click", function () {
    var songId = $(this).attr("value");

    $.ajax({
        url: "/playlist/" + songId,
        type: "delete",
        dataType: "json",
        success: function (data) {
            alert("Deleted successfully");
            location.reload()
        }
    });
});

$(".overlay").on('click', function () {
    var y = event.target.getAttribute('data');
    player = document.getElementById("audio0");
    player.setAttribute('src', y);
    player.load();
    player.play();
});
