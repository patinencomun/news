$(function(){
    //cargar comunidades
    $.getJSON( "data/comunidades.json", function( jsonObject ) {
        ponerComunidades( jsonObject );
    });

    function ponerComunidades(json){
        $.each( json, function( i, comunidad ) {
            //dos formas de hacer lo mismo, la segunda es más adecuada.
            //$("#comunidades").append( "<option value='" + comunidad.slug + "'>" + comunidad.comunidad + "</option>" );
            $('#comunidades').append($('<option>', { value: comunidad.slug, text : comunidad.comunidad }));
        }); 
    }

    //onclick en verinfo
    $("#verinfo").click(function() {
        var v=$("#comunidades").val();
        if (v!=0) window.location = "/comunidad/"+$("#comunidades").val();
        else alert('Selecciona una comunidad');
    });
});
