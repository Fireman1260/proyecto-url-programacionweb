
/*ALERTA DE BIENVENIDA */
var contador_b = 0
$('#btn_bienvenido').click(function(){

    $('.alert-info').removeClass('alert-info');
    $('.alert-danger').removeClass('alert-danger');
    $('.alert-dark').removeClass('alert-dark');

    $('.alert').addClass('alert-success');
        
    if(contador_b == 0){
        $('#titulo_mensaje').text("Bienvenido? ಠ╭╮ಠ");
        $('#mensaje').text("Estoy seguro que ya te di la bienvenida. En fin, nada ha cambiado... la pagina sigue en desarrollo");
        $('#adicional').text("Prueba algun otro boton   ");
        contador_b++;
    }
    else if(contador_b == 1){
        $('#titulo_mensaje').text("Bienvenido... ");
        $('#mensaje').text("Hola otra vez....? bienvenido a la pagina sin ningun contenido...");
        $('#adicional').text("Prueba algun otro boton   ");
        contador_b++;
    }
    else if(contador_b == 2){
        $('#titulo_mensaje').text("... ¬_¬");
        $('#mensaje').text("Creo que ya fue sufciente... porque dices bienvenido tantas veces? ");
        $('#adicional').text("Prueba algun otro boton ");
        contador_b++;
    }
    else {
        $('#titulo_mensaje').text("(-_-')");
        $('#mensaje').text("ya no dire mas.....");
        $('#adicional').text("Prueba algun otro boton ");
    }
});

/*ALERTA DE FUEGO */
$('#btn_burn').click(function(){
    
    $('.alert-success').removeClass('alert-success');
    $('.alert-info').removeClass('alert-info');
    $('.alert-dark').removeClass('alert-dark');

    $('.alert').addClass('alert-danger');
    
        $('#titulo_mensaje').text("ARE YOU MAD?!?!?!?!?! (°ロ°)");
        $('#mensaje').text("No entiendo porque intentas quemar una paquina que apenas esta en construccion... raro.....");
        $('#adicional').text("Prueba algun otro boton....   ");
});

/*ALERTA SECRETO */
$('#btn_info_secreto').click(function(){
    
    $('.alert-success').removeClass('alert-success');
    $('.alert-info').removeClass('alert-info');
    $('.alert-danger').removeClass('alert-danger');
    
    $('.alert').addClass('alert-dark');
    
        $('#titulo_mensaje').text("SECRETO! Shhhhh.... (¬‿¬)");
        $('#mensaje').text("Ya intentaste presionar TODOS los botones?");
        $('#adicional').text("Prueba algun otro boton....   ");
});

/*ALERTA INFO */
$('#btn_info').click(function(){
    
    $('.alert-success').removeClass('alert-success');
    $('.alert-danger').removeClass('alert-danger');
    $('.alert-dark').removeClass('alert-dark');
    
    $('.alert').addClass('alert-info');
    
        $('#titulo_mensaje').text("¯\_(ツ)_/¯");
        $('#mensaje').text("La idea en si... hasta donde he escuchado es un blog... pero puede cambiar...");
        $('#adicional').text("Prueba algun otro boton....   ");
});

var color = 0;
$('#btn_secret').click(function(){
    
    if(color == 0){
        $('#titulo_mensaje').css('color', 'red');
        $('#mensaje').css('color', 'red');
        $('#adicional').css('color', 'red');
        color++;
    }
    else if(color == 1){
        $('#titulo_mensaje').css('color', 'orange');
        $('#mensaje').css('color', 'orange');
        $('#adicional').css('color', 'orange');
        color++;
    }
    else if(color == 2){
        $('#titulo_mensaje').css('color', 'yellow');
        $('#mensaje').css('color', 'yellow');
        $('#adicional').css('color', 'yellow');
        color++;
    } 
    else if(color == 3){
        $('#titulo_mensaje').css('color', 'green');
        $('#mensaje').css('color', 'green');
        $('#adicional').css('color', 'green');
        color++;
    }
    else if(color == 4){
        $('#titulo_mensaje').css('color', 'LightBlue');
        $('#mensaje').css('color', 'LightBlue');
        $('#adicional').css('color', 'LightBlue');
        color++;
    }
    else if(color == 5){
        $('#titulo_mensaje').css('color', 'Blue');
        $('#mensaje').css('color', 'Blue');
        $('#adicional').css('color', 'Blue');
        color++;
    }
    else {
        $('#titulo_mensaje').css('color', 'purple');
        $('#mensaje').css('color', 'purple');
        $('#adicional').css('color', 'purple');
        color = 0;
    }
    
});
