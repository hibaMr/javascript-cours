document.getElementById("btn-hide").addEventListener('click', function(){
    // $("#title-1").hide()
    // $("#title-1").css("color","red")
    $("#title-1").css({"color":"YELLOW","background":"blue"})
    $(this).css({"color":"white","border":"none","border-radius":"10px","width":"80px","padding":"10px","background":"green"})
})

document.getElementById("btn-show").addEventListener('click', function(){
    $("#title-1").show()
    $(this).css({"color":"white","border":"none","border-radius":"10px","width":"80px","padding":"10px","background":"brown"})
    //supprimer class
    $(".liste").removeClass("remove")
    //ajouter attribu
    $(".link").attr("href","www.lien.com")
})



$(document).ready(()=>{
    
    $("#btn-ajouter").click(function(){
        $(".paragraphe-2").css({"color":"white","background":"pink","height":"20px" ,"padding":"10px"})
        $(this).css({"color":"white","border":"none","border-radius":"10px","width":"80px","padding":"10px","background":"pink"})
        //ajouter class
        $(".title-2").addClass("add")
    })

    $("#btn-modiffier").click(function(){
        //boucle => each
        $(".liste li").each(function(){
            if($(this).hasClass('title-rouge')){
                $(this).removeClass('title-rouge')
            }
        })
    })
})