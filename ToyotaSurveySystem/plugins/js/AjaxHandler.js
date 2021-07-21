// Numeric only control handler
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

jQuery.fn.ForceNumericContact =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 || 
                key == 32 ||
				key == 189 ||
				key == 109 ||
				key == 191 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

jQuery.fn.ForceNumericDate =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
			//alert(key);
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 || 
				key == 189 ||
				key == 109 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

jQuery.fn.ForceNumericDateTime =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
	
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 || 
				key == 32 || 
                key == 189 ||
				key == 109 ||
				key == 16 ||
				key == 186 ||
				(key >= 35 && key <= 40) ||
                (key >= 48 && key <= 58) ||
				(key >= 96 && key <= 105));
        });
    });
};

$(document).ready(function(){

    $('#divhide').hide();
    $('#tbhide').hide();
    
    $('.p1').hide();
//    $('.p2').hide();
//    $('.p3').hide();
//    $('.p4').hide();
    $('.str').hide();
    $('#bPrev').hide();
    
    $("#inpAge").ForceNumericOnly();
    $("#inpContact").ForceNumericContact();
	$("#Bday").ForceNumericDate();
        $("#ArrDate").ForceNumericDate();
    $("#ArrTime").ForceNumericDateTime();
    
    $(document).on('click','#bPlate',function(){
        var _plate='';
        _plate={_pno:$('#txtPlate').val()};
        
        $.ajax({
             url:'ExistingCust',
             type:'get',
             data:{
//                   data:window.btoa(JSON.stringify(_plate))
                   data:JSON.stringify(_plate)
             },
             success:function(data){
                
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    $.each(_data,function(){
                       _get = _data[0];
                    });
                    if (_get['nem'] == null){
                       $('#mPanel').removeClass('panel-default');
                       $('#mPanel').addClass('panel-danger');
                       $('#infoHd').html('No record found!');
                       $('#txtPlate').val('');
                    }
                    else{
                        $('#mPanel').removeClass('panel-danger');
                        $('#mPanel').addClass('panel-info');
                        $('#cusId').val(_get['id']);
                        $('#Name').html(_get['nem']);
                        $('#plate').html(_get['plate']);
                        $('#contact').html(_get['contact']);
                        $('#infoHd').html('Customer Information');
                        $('#divhide').show();
                        $('#tbhide').show();
                        $('#txtpno').hide();
                    };
             }
         }); 
    }); 
    
    $('#txtPlate').keypress(function(e) {
        if(e.which == 13) {
            var _plate='';

            _plate={_pno:$('#txtPlate').val()};

            $.ajax({
                 url:'ExistingCust',
                 type:'get',
                 data:{
    //                 data:window.btoa(JSON.stringify(_plate))
                       data:JSON.stringify(_plate)
                 },
                 success:function(data){

                        var _data = jQuery.parseJSON(data);
                        var _get = '';
                        $.each(_data,function(){
                           _get = _data[0];
                        });
                        if (_get['nem'] == null){
                           $('#mPanel').removeClass('panel-default');
                           $('#mPanel').addClass('panel-danger');
                           $('#infoHd').html('No record found!');
                           $('#txtPlate').val('');
                        }
                        else{
                            $('#mPanel').removeClass('panel-danger');
                            $('#mPanel').addClass('panel-info');
                            $('#cusId').val(_get['id']);
                            $('#Name').html(_get['nem']);
                            $('#plate').html(_get['plate']);
                            $('#contact').html(_get['contact']);
                            $('#infoHd').html('Customer Information');
                            $('#divhide').show();
                            $('#tbhide').show();
                            $('#txtpno').hide();
                        };
                 }
             }); 
        }
    });
    
    $(document).on('click','#bNo',function(){
         window.location.replace('Home');
    });     
    
    $(document).on('click','#bYes',function(){
        window.location.replace('SelectSurvey');
    });
    
    $(document).on('click','#SalesSur',function(){
        window.location.replace('SalesSurvey');  
    });

    $(document).on('click','#ServiceSur',function(){  
        window.location.replace('ServiceSurvey');
    });

    $(document).on('click','#Done',function(){
       window.location.replace('./'); 
    });
    
    $(document).on('click','#ncCon',function(){
       $.ajax({
             url:'nExistingCust',
             type:'post',
             success:function(data){
                if(data == 'Success'){
                window.location.replace('SelectSurvey');
                }
            }
        });
    });
    
    var pCnt = 0;
  
    $(document).on('click','#bNxtSales',function()
    {
        
        switch(pCnt) {
        case 0:
            var flag=0;
            var mp = $('#MP').val();
            var tTyp = $('#TOT').val();
            var ArTme = $('#ArrTime').val();
            var ArDte = $('#ArrDate').val();

            $('#lbMP').removeClass('warn');
            $('#lbTOT').removeClass('warn');
            $('#lbTA').removeClass('warn');
            $('#lbTAt').removeClass('warn');

            if(mp == '' || ArTme == '' || tTyp == '' || ArDte == ''){
                flag=1;
                if(mp == ''){
                    $('#lbMP').addClass('warn');
                }

                if(tTyp == ''){
                    $('#lbTOT').addClass('warn');
                }

                if(ArTme == ''){
                    $('#lbTAt').addClass('warn');
                }
                
                if(ArDte == ''){
                    $('#lbTA').addClass('warn');
                }
            }
           
            var adv = $('#SerAdv').val();
            var ArTme = $('#ArrTime').val();
            $('#sa').removeClass('warn');
            $('#ta').removeClass('warn');
            if(adv == '' || ArTme == ''){
                flag=1;
                if(adv == ''){
                    $('#sa').addClass('warn');
                }
                if(ArTme == ''){
                    $('#ta').addClass('warn');
                }
            }
            
            if (flag == 0){
                $('#PanelTyp').removeClass('panel-danger');
                $('#PanelTyp').addClass('panel-default');
                $('#SerSurPh').html("Sales Customer Survey");
                $('.p0').hide();
                $('.p1').show();
                pCnt = pCnt + 1;
                $('#bPrev').show();
                $('#bNxt').hide();
            }
            else{
                $('#PanelTyp').removeClass('panel-default');
                $('#PanelTyp').addClass('panel-danger');
                $('#SerSurPh').html("Please complete each field below!");
            }
            
            break;
//        case 1:
//            var flag=0;
//            
//            $('.p1').each(function(){
//            var name='';
//            name=$(this).attr('name');
//            
//            if($("input:radio[name=" + name + "]").is(":checked")){
//                $("#" + name).removeClass('warn');
//             }
//             else{
//                     if($(this).hasClass('txt')){
//                        var val = '';
//                        val = $(this).val();
//                        if(val==''){
//                           $("#" + name).removeClass('warn');
//                        }
//                        else{
//                            $("#" + name).removeClass('warn');
//                        }
//                    }
//                    else if($(this).hasClass('lb')){
//                         $(this).addClass('warn');
//                     }
//                     else if($(this).hasClass('dv')){
//                         
//                     }
//                     else{
//                        flag=1;
//                     }
//                 }
//            });
//            
//            if (flag == 0){
//                $('#PanelTyp').removeClass('panel-danger');
//                $('#PanelTyp').addClass('panel-default');
//                $('#SerSurPh').html("Sales Customer Survey");
//                
//                
//                $('.p1').hide();
//                $('.p2').show();
//                $('.str').hide();
//                pCnt = pCnt + 1;
//            }
//            else{
//                $('#PanelTyp').removeClass('panel-default');
//                $('#PanelTyp').addClass('panel-danger');
//                $('#SerSurPh').html("Please complete number and field below!");
//            }
//            break;
//        case 2:
//            var flag=0;
//            
//            $('.p2').each(function(){
//            var name='';
//            name=$(this).attr('name');
//
//            if($("input:radio[name=" + name + "]").is(":checked")){
//                $("#" + name).removeClass('warn');
//             }
//             else{
//                     if($(this).hasClass('txt')){
//                        var val = '';
//                        val = $(this).val();
//                        if(val==''){
//                           $("#" + name).removeClass('warn');
//                        }
//                        else{
//                            $("#" + name).removeClass('warn');
//                        }
//                    }
//                    else if($(this).hasClass('lb')){
//                         $(this).addClass('warn');
//                     }
//                     else if($(this).hasClass('dv')){
//                     }
//                     else{
//                        flag=1;
//                     }
//                 }
//            });
//            
//             if (flag == 0){
//                $('#PanelTyp').removeClass('panel-danger');
//                $('#PanelTyp').addClass('panel-default');
//                $('#SerSurPh').html("Sales Customer Survey");
//                
//              
//                $('.p2').hide();
//                $('.p3').show();
//                $('.str').hide();
//                pCnt = pCnt + 1;
//            }
//            else{
//                $('#PanelTyp').removeClass('panel-default');
//                $('#PanelTyp').addClass('panel-danger');
//                $('#SerSurPh').html("Please complete number and field below!");
//            }
//            break;
//        
//        
        default:
             
            };
    });
  
    $(document).on('click','#bNxtService',function()
    {
        
        switch(pCnt) {
        case 0:
            var flag=0;
            var mp = $('#MP').val();
            var tTyp = $('#TOT').val();
            var ArTme = $('#ArrTime').val();
            var ArDte = $('#ArrDate').val();

            $('#lbMP').removeClass('warn');
            $('#lbTOT').removeClass('warn');
            $('#lbTA').removeClass('warn');
            $('#lbTAt').removeClass('warn');

            if(mp == '' || ArTme == '' || tTyp == '' || ArDte == ''){
                flag=1;
                if(mp == ''){
                    $('#lbMP').addClass('warn');
                }

                if(tTyp == ''){
                    $('#lbTOT').addClass('warn');
                }

                if(ArTme == ''){
                    $('#lbTAt').addClass('warn');
                }
                
                if(ArDte == ''){
                    $('#lbTA').addClass('warn');
                }
            }
           
            var adv = $('#SerAdv').val();
            var ArTme = $('#ArrTime').val();
            $('#sa').removeClass('warn');
            $('#ta').removeClass('warn');
            if(adv == '' || ArTme == ''){
                flag=1;
                if(adv == ''){
                    $('#sa').addClass('warn');
                }
                if(ArTme == ''){
                    $('#ta').addClass('warn');
                }
            }
            
            if (flag == 0){
                $('#PanelTyp').removeClass('panel-danger');
                $('#PanelTyp').addClass('panel-default');
                $('#SerSurPh').html("Service Customer Survey");
                $('.p0').hide();
                $('.p1').show();
                pCnt = pCnt + 1;
                $('#bPrev').show();
                $('#bNxt').hide();
            }
            else{
                $('#PanelTyp').removeClass('panel-default');
                $('#PanelTyp').addClass('panel-danger');
                $('#SerSurPh').html("Please complete each field below!");
            }
            
            break;
//        case 1:
//            var flag=0;
//            
//            $('.p1').each(function(){
//            var name='';
//            name=$(this).attr('name');
//            
//            if($("input:radio[name=" + name + "]").is(":checked")){
//                $("#" + name).removeClass('warn');
//             }
//             else{
//                     if($(this).hasClass('txt')){
//                        var val = '';
//                        val = $(this).val();
//                        if(val==''){
//                           $("#" + name).removeClass('warn');
//                        }
//                        else{
//                            $("#" + name).removeClass('warn');
//                        }
//                    }
//                    else if($(this).hasClass('lb')){
//                         $(this).addClass('warn');
//                     }
//                     else if($(this).hasClass('dv')){
//                         
//                     }
//                     else{
//                        flag=1;
//                     }
//                 }
//            });
//            
//            if (flag == 0){
//                $('#PanelTyp').removeClass('panel-danger');
//                $('#PanelTyp').addClass('panel-default');
//                $('#SerSurPh').html("Sales Customer Survey");
//                
//                
//                $('.p1').hide();
//                $('.p2').show();
//                $('.str').hide();
//                pCnt = pCnt + 1;
//            }
//            else{
//                $('#PanelTyp').removeClass('panel-default');
//                $('#PanelTyp').addClass('panel-danger');
//                $('#SerSurPh').html("Please complete number and field below!");
//            }
//            break;
//        case 2:
//            var flag=0;
//            
//            $('.p2').each(function(){
//            var name='';
//            name=$(this).attr('name');
//
//            if($("input:radio[name=" + name + "]").is(":checked")){
//                $("#" + name).removeClass('warn');
//             }
//             else{
//                     if($(this).hasClass('txt')){
//                        var val = '';
//                        val = $(this).val();
//                        if(val==''){
//                           $("#" + name).removeClass('warn');
//                        }
//                        else{
//                            $("#" + name).removeClass('warn');
//                        }
//                    }
//                    else if($(this).hasClass('lb')){
//                         $(this).addClass('warn');
//                     }
//                     else if($(this).hasClass('dv')){
//                     }
//                     else{
//                        flag=1;
//                     }
//                 }
//            });
//            
//             if (flag == 0){
//                $('#PanelTyp').removeClass('panel-danger');
//                $('#PanelTyp').addClass('panel-default');
//                $('#SerSurPh').html("Sales Customer Survey");
//                
//              
//                $('.p2').hide();
//                $('.p3').show();
//                $('.str').hide();
//                pCnt = pCnt + 1;
//            }
//            else{
//                $('#PanelTyp').removeClass('panel-default');
//                $('#PanelTyp').addClass('panel-danger');
//                $('#SerSurPh').html("Please complete number and field below!");
//            }
//            break;
//        
//        
        default:
             
            };
    });
    
    $(document).on('click','#bPrev',function(){
        switch(pCnt) {
        case 1:
            $('.p0').show();
            $('.p1').hide();
            pCnt = pCnt - 1;
            $('#bPrev').hide();
            $('#bNxt').show();
            break;
//        case 2:
//            $('.p1').show();
//            $('.p2').hide();
//            pCnt = pCnt - 1;
//            break;
//        case 3:
//            $('.p2').show();
//            $('.p3').hide();
//        
//            pCnt = pCnt - 1;
//            break;
//        case 4:
//            $('.p3').show();
//            $('.p4').hide();
//            pCnt = pCnt - 1;
//            $('#bNxt').show();
//            break;
        default:
            };
    });
    
});

    




