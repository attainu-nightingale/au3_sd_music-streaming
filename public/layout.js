 $('#sidebarCollapse').on('click', function() {
     $('#sidebar').toggleClass('display');
 });

 $('#dismiss').on('click', function() {
     $('#sidebar').removeClass('display');
     
 });

$('#main').on('click', function() {
     $('#sidebar').removeClass('display');
});

$(".overlay").on('click',function(){
    var y=event.target.getAttribute('data');
    player=document.getElementById("audio0");
    player.setAttribute('src',y);
});

$("#plus").on("click",function(e){
    e.preventDefault();
    var data={
        image:$("#image").val(),
        songName:$("#songName").val(),
        audioSrc:$("#audioSrc").val()
    }
$.ajax({
    type:"POST",
    url:"/playlist/add",
    data:data,
    dataType:"json",
    success:function(data){
        console.log(data);
    }
});
alert("song is added to playlist")    
});


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