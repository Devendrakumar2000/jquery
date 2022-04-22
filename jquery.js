console.log("hii JQuery");

//Question no. 1
$("button.hide").click(function(){
    $(".para").hide();
})

$("button.visible").click(function(){
    $(".para").show();
})

//Question no. 2

$("button.head").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type : "GET",
        success: function(data){
            document.getElementById("heading").innerText = data.title;
        }
    })
})