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

    var data={
        audioSrc:$("#audio0").attr('src'),
        image:$("#audio0").attr('data1'),
        songName:$("#audio0").attr('data2')
    }
    $.ajax({
        type:"POST",
        url:"/playlist/recent/add",
        contentType:"application/json",
        data:JSON.stringify(data),
        dataType:"json",
        success:function(data){
           console.log(data);
        }
        });
})



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

//to play next song


//player loop
var x = document.getElementById("audio0");

function enableLoop() {
  x.loop = true;
  x.load();
} 

function disableLoop(){
   x.loop = false;
  x.load();
} 
