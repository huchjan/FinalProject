$(document).ready(function () {
    $(".item_expand").click(function () {
        $(".item_container:focus").blur(function(){
            console.log("help")
        });
        
    })

})