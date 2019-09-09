 $('#sidebarCollapse').on('click', function() {
     $('#sidebar').toggleClass('display');
 });

 $('#dismiss').on('click', function() {
     $('#sidebar').removeClass('display');
     
 });

$('#main').on('click', function() {
     $('#sidebar').removeClass('display');
});

$("#plus").on("click",function(){
    var data={
        audiosrc:$("#audio0").getAttribute("src")
        }
        $.ajax({
            type:"POST",
            url:"/playlist",
            data:data,
            dataType:"json",
            success:function(data){
                console.log(data);
            }
        })
})