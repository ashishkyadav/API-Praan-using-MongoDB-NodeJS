$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(products, function(index, product ) {

                string += '<tr><td>'+(index+1)+'</td><td>'+product['Device']+'</td><td>'+product['t']+'</td><td>'+product['w']+'</td><td>'+product['h']+'</td><td>'+product['p1']+'</td>product['p25']+'</td>product['p10']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });
 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 