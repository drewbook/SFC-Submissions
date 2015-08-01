( function( $ ) {

	$(".dontOpen").click(function (event) 
    { 
        
       
         //event.preventDefault(); 
         //here you can also do all sort of things 
    	
    	
    
    	$( "#mainPDF" ).attr( "data", $(this).attr("href") );
    	
    	 return false;
        
   
    });
    
    }) ( jQuery );
    
    