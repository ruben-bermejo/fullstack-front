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

$("#tamano").on('change', function(){
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: {
            tamano: this.value
        },
        success: function(result){
            $("#disponibilidad").text(result);
        }
    });
});