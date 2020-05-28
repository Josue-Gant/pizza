$(document).ready(function () {

    var total = 100;
    $('#costo-total').val('$'+' '+'100');

    $('#tipo-pan').change(function () {

        var numero = $('#tipo-pan option:selected').val()
        total = total + parseInt(numero);
        $('#costo-total').val('$'+' '+ total.toString());
    });


    $('#ingr-cua').css('display', 'none');
    $('#ingr-cin').css('display', 'none');
    $('#ingr-seis').css('display', 'none');

    $('#num-ingr').change(function () {
        
        var numero = $('#num-ingr option:selected').val()

        if(numero == '10'){

            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'none');
            $('#ingr-seis').css('display', 'none');
            total = total + 10;
            $('#costo-total').val('$'+' '+ total.toString())

        }else if(numero == '20'){

            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'block');
            $('#ingr-seis').css('display', 'none');
            total = total + 20;
            $('#costo-total').val('$'+' '+ total.toString())

        }else if(numero == '30'){

            $('#ingr-cua').css('display', 'block');
            $('#ingr-cin').css('display', 'block');
            $('#ingr-seis').css('display', 'block');
            total = total + 30;
            $('#costo-total').val('$'+' '+ total.toString())
            
        }else{
            $('#ingr-cua').css('display', 'none');
            $('#ingr-cin').css('display', 'none');
            $('#ingr-seis').css('display', 'none');
        }
    });

    $('.ing-ext').change(function () {

        if( $('#ext-q').prop('checked') ) {

           var numero = 8;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-p').prop('checked') ){

           var numero = 6;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-q").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-j').prop('checked') ){
            var numero = 3;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-c').prop('checked') ){
            var numero = 9;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-a').prop('checked') ){
            var numero = 1;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);
            
        }else if($('#ext-t').prop('checked') ){
            var numero = 5;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-s").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);
            
        }else if($('#ext-s').prop('checked') ){
            var numero = 10;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-pi').prop('checked') ){
            var numero = 11;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-ch").prop("checked", false);

        }else if($('#ext-ch').prop('checked') ){
            var numero = 7;
           total = total + numero;
           $('#costo-total').val('$'+' '+ total.toString());

           $("#ext-p").prop("checked", false);
           $("#ext-j").prop("checked", false);
           $("#ext-c").prop("checked", false);
           $("#ext-a").prop("checked", false);
           $("#ext-t").prop("checked", false);
           $("#ext-q").prop("checked", false);
           $("#ext-pi").prop("checked", false);
           $("#ext-q").prop("checked", false);

        }

    });


});