 $("#firstSong").on('click', function (e) {
     e.preventDefault();
     var data = {
         audioSrc: $("#audioSrcOne").attr("data"),
         songName: $("#songNameOne").attr("value"),
         image: $("#songImageOne").attr("src"),
     };
     $.ajax({
         url: "/playlist/add",
         method: "POST",
         dataType: "json",
         contentType: "application/json",
         data: JSON.stringify(data),
         success: function (data) {
             console.log(data);
         }
     });
     window.location.replace("/playlist");
 });

  $("#secondSong").on('click', function (e) {
      e.preventDefault();
      var data = {
          audioSrc: $("#audioSrcTwo").attr("data"),
          songName: $("#songNameTwo").attr("value"),
          image: $("#songImageTwo").attr("src"),
      };
      $.ajax({
          url: "/playlist/add",
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(data),
          success: function (data) {
              console.log(data);
          }
      });
      window.location.replace("/playlist");
  });

   $("#thirdSong").on('click', function (e) {
       e.preventDefault();
       var data = {
           audioSrc: $("#audioSrcThree").attr("data"),
           songName: $("#songNameThree").attr("value"),
           image: $("#songImageThree").attr("src"),
       };
       $.ajax({
           url: "/playlist/add",
           method: "POST",
           dataType: "json",
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function (data) {
               console.log(data);
           }
       });
       window.location.replace("/playlist");
   });

$("#fourthSong").on('click', function (e) {
    e.preventDefault();
    var data = {
        audioSrc: $("#audioSrcFour").attr("data"),
        songName: $("#four").attr("value"),
        image: $("#songImageFour").attr("src"),
    };
    $.ajax({
        url: "/playlist/add",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
        }
    });
    window.location.replace("/playlist");
});

 $("#fifthSong").on('click', function (e) {
     e.preventDefault();
     var data = {
         audioSrc: $("#audioSrcFive").attr("data"),
         songName: $("#songNameFive").attr("value"),
         image: $("#songImageFive").attr("src"),
     };
     $.ajax({
         url: "/playlist/add",
         method: "POST",
         dataType: "json",
         contentType: "application/json",
         data: JSON.stringify(data),
         success: function (data) {
             console.log(data);
         }
     });
     window.location.replace("/playlist");
 });

  $("#sixthSong").on('click', function (e) {
      e.preventDefault();
      var data = {
          audioSrc: $("#audioSrcSix").attr("data"),
          songName: $("#six").attr("value"),
          image: $("#songImageSix").attr("src"),
      };
      $.ajax({
          url: "/playlist/add",
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(data),
          success: function (data) {
              console.log(data);
          }
      });
      window.location.replace("/playlist");
  });

   $("#seventhSong").on('click', function (e) {
       e.preventDefault();
       var data = {
           audioSrc: $("#audioSrcSeven").attr("data"),
           songName: $("#songNameSeven").attr("value"),
           image: $("#songImageSeven").attr("src"),
       };
       $.ajax({
           url: "/playlist/add",
           method: "POST",
           dataType: "json",
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function (data) {
               console.log(data);
           }
       });
       window.location.replace("/playlist");
   });

    $("#eigthSong").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrcEigth").attr("data"),
            songName: $("#songNameEigth").attr("value"),
            image: $("#songImageEigth").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

     $("#ninthSong").on('click', function (e) {
         e.preventDefault();
         var data = {
             audioSrc: $("#audioSrcNine").attr("data"),
             songName: $("#songNameNine").attr("value"),
             image: $("#songImageNine").attr("src"),
         };
         $.ajax({
             url: "/playlist/add",
             method: "POST",
             dataType: "json",
             contentType: "application/json",
             data: JSON.stringify(data),
             success: function (data) {
                 console.log(data);
             }
         });
         window.location.replace("/playlist");
     });