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
   var x=event.target.getAttribute('data1');
   var y = event.target.getAttribute('data');
   var z=event.target.getAttribute('data2');
   player=document.getElementById("audio0");
   player.setAttribute('src',y);
   player.setAttribute('data1',x);
   player.setAttribute('data2',z)
   player.play();
});

//to add the song to playlist from player
$('#plus').on('click',function(){
var data={
    audioSrc: $("#audio0").attr("src"),
    image:$("#audio0").attr("data1"),
    songName:$("#audio0").attr("data2")
}
$.ajax({
type:"POST",
url:"/playlist/add",
contentType:"application/json",
data:JSON.stringify(data),
dataType:"json",
success:function(data){
   console.log(data);
}
});
//alert("song is added to playlist");
window.location.replace('/playlist');
});

// //to play next song
// $("#next").on("click",function() {
//     //for(var i=0;i<playlist.length;i++){
        
//     $("#audio0")[0].pause();
//     var i=event.target.getAttribute("data");
//     //$("#audio0").load.getAttribute(data);
//     i++;
//     player.setAttribute("src")
    
// //     $("#audio0")[0].load.attr("src");
// //     $("#audio0")[0].audioSrc = '';
// //     i++
// //     }
//  })
    
// $("#prev").on("click",function() {
//     $("#audio0")[0].pause();
//     $("#audio0")[0].setAttribute('src') = '';
//     var index=0;
//     index--;
//     if (index == getAttribute("data.length")) {
//         index = 0;
//     }
//     $("#audio0")[0].src = user.playlist[index];
//     if (playing) {
//         $("#audio0")[0].play();
//     }
// })