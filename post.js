$(function(){
    $('.wpcf7-form').on('submit', function(){
        let data = $(this).serialize();
        $.ajax({
            method: 'POST',
            url: 'action_ajax_form.php',
            data: data
        }).done(function( msg ){
            console.log( data );
        });

        return false;
    });
});
