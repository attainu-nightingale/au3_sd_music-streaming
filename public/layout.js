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

// search-songs

     $("#search").on('click', function (e) {
         e.preventDefault();
         $('#layout-row').html("");
         data = $("#search-keywords").val();
         $.ajax({
             url: "/search/" + data,
             method: "GET",
             datatype: "json",
             success: function (data) {
                 for (var i = 0; i < data.length; i++) {
                     console.log(data[i].album.images[0].url);
                     if (data[i].preview_url === null) {
                         i++;
                     } else {
                         $('#layout-row').append(`<div class="col-6 col-sm-4 col-md-4 col-lg-2 mb-2 ml-0 search-song">
                            <div class="card text-center" style="width: 12rem;">
                                <img class="card-img-top" id="songImageOne" src=${data[i].album.images[0].url} alt="Card image cap">
                                <div class="overlay" data=${data[i].preview_url} data1=${data[i].album.images[0].url}
                                  data2="${data[i].name}">
                                </div>
                                <h5 class="album-name pt-4 pb-2" id="songNameOne" value="{{firstAlbumName}}">${data[i].name}</h5>
                            </div>
                        </div>`);
                     }
                 }
             }
         });
     });

      $(document).on('click', '.overlay', function () {
          console.log('document is always there');
              var x = event.target.getAttribute('data1');
              var y = event.target.getAttribute('data');
              var z = event.target.getAttribute('data2');
              player = document.getElementById("audio0");
              player.setAttribute('src', y);
              player.setAttribute('data1', x);
              player.setAttribute('data2', z);
              player.play();
      });
