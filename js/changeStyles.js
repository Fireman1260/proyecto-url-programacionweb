
/*ALERTA DE BIENVENIDA */
var contador_b = 0
$('#btn_bienvenido').click(function(){
    removerClase();
    $('.alert').addClass('alert-success');
    if(contador_b < 3)
        contador_b++;
    if(contador_b == 0){
        $('#titulo_mensaje').text("Bienvenido? ಠ╭╮ಠ");
        $('#mensaje').text("Estoy seguro que ya te di la bienvenida. En fin, nada ha cambiado... la pagina sigue en desarrollo");
        $('#adicional').text("Prueba algun otro boton   ");
    }
    else if(contador_b == 1){
        $('#titulo_mensaje').text("Bienvenido... ");
        $('#mensaje').text("Hola otra vez....? bienvenido a la pagina sin ningun contenido...");
        $('#adicional').text("Prueba algun otro boton   ");
    }
    else if(contador_b == 2){
        $('#titulo_mensaje').text("... ¬_¬");
        $('#mensaje').text("Creo que ya fue sufciente... porque dices bienvenido tantas veces? ");
        $('#adicional').text("Prueba algun otro boton ");
    }
    else {
        $('#titulo_mensaje').text("(-_-')");
        $('#mensaje').text("ya no dire mas.....");
        $('#adicional').text("Prueba algun otro boton ");
    }
});

/*ALERTA DE FUEGO */
$('#btn_burn').click(function(){
    removerClase();
    $('.alert').addClass('alert-danger');
    
        $('#titulo_mensaje').text("ARE YOU MAD?!?!?!?!?! (°ロ°)");
        $('#mensaje').text("No entiendo porque intentas quemar una paquina que apenas esta en construccion... raro.....");
        $('#adicional').text("Prueba algun otro boton....   ");
});

/*ALERTA SECRETO */
$('#btn_secreto').click(function(){
    removerClase();
    $('.alert').addClass('alert-dark');
    
        $('#titulo_mensaje').text("SECRETO! Shhhhh.... (¬‿¬)");
        $('#mensaje').text("Ya intentaste presionar TODOS los botones?");
        $('#adicional').text("Prueba algun otro boton....   ");
});

/*ALERTA INFO */
$('#btn_info').click(function(){
    removerClase();
    $('.alert').addClass('alert-info');
    
        $('#titulo_mensaje').text("¯\_(ツ)_/¯");
        $('#mensaje').text("La idea en si... hasta donde he escuchado es un blog... pero puede cambiar...");
        $('#adicional').text("Prueba algun otro boton....   ");
});

function removerClase(){
    $('.alert-success').removeClass('.alert-warning');
    $('.alert-info').removeClass('.alert-warning');
    $('.alert-danger').removeClass('.alert-warning');
    $('.alert-dark').removeClass('.alert-warning');
}