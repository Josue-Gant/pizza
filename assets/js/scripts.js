$(document).ready(function () {

    var total = 100;
    var temPan = 0;
    var temIng = 0;
    var temExt = 0;

    $('#costo-total').val('$'+' '+'100');

    $('#tipo-pan').change(function () {
        total = total - temPan;
        var numero = $('#tipo-pan option:selected').val()
        temPan = parseInt(numero)
        total = total + parseInt(numero);
        $('#costo-total').val('$'+' '+ total.toString());
    });


    $('#ingr-cua').css('display', 'none');
    $('#ingr-cin').css('display', 'none');
    $('#ingr-seis').css('display', 'none');

    $('#num-ingr').change(function () {
        
        var numero = $('#num-ingr option:selected').val()
        total = total - temIng;

        if(numero == '10'){
            temIng = 10;
            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'none');
            $('#ingr-seis').css('display', 'none');
            total = total + 10;
            $('#costo-total').val('$'+' '+ total.toString())

        }else if(numero == '20'){
            temIng = 20;
            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'block');
            $('#ingr-seis').css('display', 'none');
            total = total + 20;
            $('#costo-total').val('$'+' '+ total.toString())

        }else if(numero == '30'){
            temIng = 30;
            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'block');
            $('#ingr-seis').css('display', 'block');
            total = total + 30;
            $('#costo-total').val('$'+' '+ total.toString())
            
        }else{
            temIng = 30;
            $('#ingr-cua').css('display', 'none');
            $('#ingr-cin').css('display', 'none');
            $('#ingr-seis').css('display', 'none');
        }
    });
    
    $('#ing-exr').change(function () {
        total = total - temExt;
        var numero = $('#ing-exr option:selected').val()
        temExt = parseInt(numero)
        total = total + parseInt(numero);
        $('#costo-total').val('$'+' '+ total.toString());

    });

});