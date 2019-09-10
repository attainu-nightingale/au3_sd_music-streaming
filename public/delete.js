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

