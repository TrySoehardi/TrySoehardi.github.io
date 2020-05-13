

$(document).ready(function(){

    // jQuery methods go here...
   
  
 
    if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        // some code..
        $('#mydiv1').prependTo( $('#MYDIV1') );
        $('#MYDIV1').addClass('mb-3');
        $('#mydiv2').prependTo( $('#MYDIV2') );
        $('#MYDIV2').addClass('mb-3');
        $('#mydiv3').prependTo( $('#MYDIV3') );
        $('#MYDIV3').addClass('mb-3');
        $('#mydiv4').prependTo( $('#MYDIV4') );
        $('#MYDIV4').addClass('mb-3');
       }
       
        

    //    console.log(device);

    

});