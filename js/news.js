$(function(){
    //cargar comunidades
    

    //onclick en verinfo
    $("#verinfo").click(function() {
        var v=$("#comunidades").val();
        if (v!=0) window.location = "/comunidad/"+$("#comunidades").val();
        else alert('Selecciona una comunidad');
    });
});
