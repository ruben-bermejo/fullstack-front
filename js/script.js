/*jshint esversion: 6 */
$("#formularioPedido").submit(function(e) {
    let nombreValue = $("#nombre").val().trim();
    let apellidosValue =  $("#apellidos").val().trim();
    if(!nombreValue || !apellidosValue){
        $("#nombreLabel").css("color", nombreValue ? "" : "red");
        $("#apellidosLabel").css("color", apellidosValue ? "" : "red");
        e.preventDefault();
    }
});