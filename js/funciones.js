$(document).ready(function(){
    
    $("#formulario").hide();

    $("h1.aparecer").click(function(){
        //alert("Hola mundo");
        //$("#formulario").show(4000);
        $("#formulario").toggle(3000);
    })

    $("#calcular").click(calcular);
})

function calcular(){
    
    nombre = $("[name=nombre]").val();
    //alert(nombre);

    //$("#mensaje").text(nombre);
    //$("#mensaje").html("<h1 class='obligado'>"+nombre+"</h1>");
    $()
}