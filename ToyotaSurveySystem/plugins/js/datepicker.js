//jQuery('#Bday').datetimepicker({
// timepicker:false,
// format:'Y-m-d'
//  // '9999/19/39 29:59' - digit is the maximum possible for a cell
//});
//
//jQuery('#ArrDate').datetimepicker({
// timepicker:false,
// format:'Y-m-d'
//  // '9999/19/39 29:59' - digit is the maximum possible for a cell
//});
//
//jQuery('#ArrTime').datetimepicker({
// datepicker:false,
// format:'H:i',
// allowTimes:[
//  '01:00', '02:00', '03:00','04:00','05:00','06:00', 
//  '07:00', '08:00', '09:00', '10:00', '11:00','12:00'
// ]
//});

$(document).ready(function(){
//	var date_input=$('input[name="date"]'); //our date input has the name "date"
//	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//	date_input.datepicker({
//		format: 'mm/dd/yyyy',
//		container: container,
//		todayHighlight: true,
//		autoclose: true
//	});
        
//        $("#ArrTime").datetimepicker({
//            format:'Y-m-d H:i'
//        });
       
//        $("#Bday").datetimepicker({
//             format:'Y-m-d H:i'
//        });  
        
//        var date_input=$('input[name="date"]'); //our date input has the name "date"
//        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//        date_input.datepicker({
//            format: 'yyyy-mm-dd',
//            container: container,
//            todayHighlight: true,
//            autoclose: true
//        });

    $("#lbBday").append("<div id='dateBox'></div>");
    $("#dateBox").DateTimePicker({
        dateFormat:'MM-dd-yyyy'
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

//    $("#ArrTime").datetimepicker();






