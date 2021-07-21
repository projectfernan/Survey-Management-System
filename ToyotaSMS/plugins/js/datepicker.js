
$(document).ready(function(){

    $("#dtFT").append("<div id='dateBox'></div>");
    $("#dateBox").DateTimePicker({
        dateFormat:'yyyy-MM-dd'
     }
     );
     
    $("#dttime").append("<div id='dtBox'></div>"); // Add Element To DOM
    $("#dtBox").DateTimePicker({
        dateFormat:'MM-dd-yyyy',
        minTime:'06:00',
        maxTime:'19:00',
        timeFormat:'hh:mm AA'
     }
     );
                    
});







