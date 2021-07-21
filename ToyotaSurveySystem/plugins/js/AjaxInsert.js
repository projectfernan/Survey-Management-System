$(function(){
    $('.ncsInfo').hide();
    
    $(document).on('click','#save',function(){
        var flag='';
        
        $('.radioYN').each(function(){
           var name='';
           name=$(this).attr('name');
           if($("input:radio[name=" + name + "]").is(":checked")){
               $("#" + name).removeClass('warn');
            }
            else{
                    if($(this).hasClass('txt')){
                        var val = '';
                        val = $(this).val();
                        if(val==''){
                           $("#" + name).removeClass('warn');
                        }
                        else{
                            $("#" + name).removeClass('warn');
                        }
                    }
                    else if($(this).hasClass('lb')){
                        $(this).addClass('warn');
                    }
                    else if($(this).hasClass('cb')){
                        var val = '';
                        val = $(this).val();
                        if(val==''){
                           $("#" + name).addClass('warn');
                            flag=1;
                        }
                        else{
                            $("#" + name).removeClass('warn');
                        }
                    }
                    else{
                         flag=1;
                    }
                }
           });
        
        var AA = $('#ArrTime').val();
        var ampm = AA.substring(6,8);
        
        var vDate = $('#ArrDate').val();
        var VDateYR = vDate.substring(6,10);
        var vDateMM = vDate.substring(0,2);
        var vDateDD = vDate.substring(3,5);
        var ArDate = VDateYR + "-" + vDateMM + "-" + vDateDD;
        var ArTme ='';
        var mH = '';
 
        switch(ampm) {
      
            case 'AM':
                var tme = $('#ArrTime').val();
                var h = tme.substring(0,2);
                if(h == '12'){
                    mH = '00' + tme.substring(2,5);
                    ArTme = ArDate + " " + mH + ':00';
                }
                else{
                    var hm = tme.substring(0,5);
                    ArTme = ArDate + " " + hm + ':00';
                }
                break;
            case 'PM':
                var tme = $('#ArrTime').val();
                var h = tme.substring(0,2);
       
                switch(h) {
                    
                    case '12':
                        mH = '12' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '01':
                        mH = '13' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '02':
                        mH = '14' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '03':
                        mH = '15' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '04':
                        mH = '16' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;    
                    case '05':
                        mH = '17' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '06':
                        mH = '18' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '07':
                        mH = '19:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '08':
                        mH = '20:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '09':
                        mH = '21:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break 
                    case '10':
                        mH = '22:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '11':
                        mH = '23:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    default:
                    };
            break;
        default:
            };

        var adv = $('#SerAdv').val();
      
        $('.ar').removeClass('warn');
        $('#ta').removeClass('warn');
        if(adv == '' || ArTme == ''){
            flag=1;
            if(adv == ''){
                $('.ar').addClass('warn');
            }
            if(ArTme == ''){
                $('#ta').addClass('warn');
            }
        }
        
        var _arr = [];
        var _i = 0;
        
         $('.radioYN').each(function(){
            if($(this).is(':checked')){
                _arr[_i] = {
//                    _cusId:$('#cusId').val(),
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _adv:$('#SerAdv').val(),
                    _arrTime:ArTme
                };
                _i++;    
            }
            else{
                if($(this).hasClass('txt')){
                    _arr[_i]={
                    _cusId:$('#cusId').val(),    
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _adv:$('#SerAdv').val(),
                    _arrTime:ArTme
                };
                _i++;
                }
                else if($(this).hasClass('cb')){
                    _arr[_i]={  
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _adv:$('#SerAdv').val(),
                    _arrTime:ArTme
                };
                _i++;
                }
            }
         });
         
         if (flag == 0){
                $.ajax({
                url:'SerSurDone',
                type:'post',
                data:{
                    data:window.btoa(JSON.stringify(_arr))
//                        data:JSON.stringify(_arr)
                },
                success:function(data){
                    if(data == 'Success'){
                        window.location.replace('SurveyDone');
                    }
                }
                });
         }
         else{
            $('#PanelTyp').removeClass('panel-default');
            $('#PanelTyp').addClass('panel-danger');
            $('#SerSurPh').html("Please complete each number and field below!");
            window.scrollTo(0,0);
         }
});        
     
    
    $(document).on('click','#btnSave',function(){
        var chk = '';
        var vName = $('#inpName').val();
        var vNikName = $('#inpNikName').val();
        var vDate = $('#inpBday').val();
        var VDateYR = vDate.substring(6,10);
        var vDateMM = vDate.substring(0,2);
        var vDateDD = vDate.substring(3,5);
        var vBday = VDateYR + "-" + vDateMM + "-" + vDateDD;
        var vStat = $('#inpStat').val();
        var vContact = $('#inpContact').val();
        var vEmail = $('#inpEmail').val();
        var vAdd = $('#inpAdd').val();
        var vComp = $('#inpComp').val();
        var vCompAdd = $('#inpCompAdd').val();
        var vOccu = $('#inpOccu').val();
        var vField = $('#inpField').val();
        var vPlate = $('#inpPlate').val();
        var vUnit = $('#inpUnit').val();
        var vUsage = $('#inpUsage').val();
        var vSports = $('#inpSports').val();
        var vInterest = $('#inpInterest').val();

        if (vName == ''|| vContact == '' || vPlate == '' || vBday == '--'){
            chk='1';
            
            $('#ncPanel').removeClass('panel-info');
            $('#ncPanel').addClass('panel-danger');
            $('#ncH').html("PLEASE DON'T LEAVE A BLANK !");
            
            if(vName == ''){
                $('#lbName').addClass('warn');
                $('#inpName').addClass('alert-danger');
                $('#inpName').attr('placeholder','Please enter your name here!');
            }
            else{
                 $('#lbName').removeClass('warn');
                 $('#inpName').removeClass('alert-danger');
            }
            
//            if(vNikName == ''){
//                $('#lbNikName').addClass('warn');
//                $('#inpNikName').addClass('alert-danger');
//                $('#inpNikName').attr('placeholder','Please enter your nick name here!');
//            }
//            else{
//                 $('#lbNikName').removeClass('warn');
//                 $('#inpNikName').removeClass('alert-danger');
//            }
//
            if(vBday == '--'){
                $('#lbBday').addClass('warn');
                $('#inpBday').addClass('alert-danger');
                $('#inpBday').attr('placeholder','Enter your birthday here!');
            }
            else{
                 $('#lbBday').removeClass('warn');
                 $('#inpBday').removeClass('alert-danger');
            }
//          
//            if(vStat == ''){
//                $('#lbStat').addClass('warn');
//                $('#inpStat').addClass('alert-danger');
//                $('#inpStat').attr('placeholder','Enter your marital status here!');
//            }
//            else{
//                 $('#lbStat').removeClass('warn');
//                 $('#inpStat').removeClass('alert-danger');
//            }
            
            if (vContact == ''){
                $('#lbContact').addClass('warn');
                $('#inpContact').addClass('alert-danger');
                $('#inpContact').attr('placeholder','09XX-XXX-XXXX / 554-XXX*101(Loc)');
            }else{
                $('#lbContact').removeClass('warn');
                $('#inpContact').removeClass('alert-danger');
            }
            
//            if(vEmail == ''){
//                $('#lbEmail').addClass('warn');
//                $('#inpEmail').addClass('alert-danger');
//                $('#inpEmail').attr('placeholder','Please enter your email here!');
//            }
//            else{
//                 $('#lbEmail').removeClass('warn');
//                 $('#inpEmail').removeClass('alert-danger');
//            }
//            
//            if(vAdd == ''){
//                $('#lbAdd').addClass('warn');
//                $('#inpAdd').addClass('alert-danger');
//                $('#inpAdd').attr('placeholder','Please enter your home address here!');
//            }
//            else{
//                 $('#lbAdd').removeClass('warn');
//                 $('#inpAdd').removeClass('alert-danger');
//            }
//            
//            if(vComp == ''){
//                $('#lbComp').addClass('warn');
//                $('#inpComp').addClass('alert-danger');
//                $('#inpComp').attr('placeholder','Please enter your company name here!');
//            }
//            else{
//                 $('#lbComp').removeClass('warn');
//                 $('#inpComp').removeClass('alert-danger');
//            }
//            
//            if(vCompAdd == ''){
//                $('#lbCompAdd').addClass('warn');
//                $('#inpCompAdd').addClass('alert-danger');
//                $('#inpCompAdd').attr('placeholder','Please enter your company address here!');
//            }
//            else{
//                 $('#lbCompAdd').removeClass('warn');
//                 $('#inpCompAdd').removeClass('alert-danger');
//            }
//            
//            if(vOccu == ''){
//                $('#lbOccu').addClass('warn');
//                $('#inpOccu').addClass('alert-danger');
//                $('#inpOccu').attr('placeholder','Please enter your occupation here!');
//            }
//            else{
//                 $('#lbOccu').removeClass('warn');
//                 $('#inpOccu').removeClass('alert-danger');
//            }
//            
//            if(vField == ''){
//                $('#lbField').addClass('warn');
//                $('#inpField').addClass('alert-danger');
//                $('#inpField').attr('placeholder','Please enter your field here!');
//            }
//            else{
//                 $('#lbField').removeClass('warn');
//                 $('#inpField').removeClass('alert-danger');
//            }
            
            if(vPlate == ''){
                $('#lbPlate').addClass('warn');
                $('#inpPlate').addClass('alert-danger');
                $('#inpPlate').attr('placeholder','Enter plate mumber here!');
            }
            else{
                $('#lbPlate').removeClass('warn');
                $('#inpPlate').removeClass('alert-danger');
            }
            
//            if(vUnit == ''){
//                $('#lbUnit').addClass('warn');
//                $('#inpUnit').addClass('alert-danger');
//                $('#inpUnit').attr('placeholder','Enter your unit model here!');
//            }
//            else{
//                 $('#lbUnit').removeClass('warn');
//                 $('#inpUnit').removeClass('alert-danger');
//            }
//            
//            if(vUsage == ''){
//                $('#lbUsage').addClass('warn');
//                $('#inpUsage').addClass('alert-danger');
//                $('#inpUsage').attr('placeholder','Please enter your vehicle usage here!');
//            }
//            else{
//                 $('#lbUsage').removeClass('warn');
//                 $('#inpUsage').removeClass('alert-danger');
//            }
//            
//            if(vSports == ''){
//                $('#lbSports').addClass('warn');
//                $('#inpSports').addClass('alert-danger');
//                $('#inpSports').attr('placeholder','Please enter your sports here!');
//            }
//            else{
//                 $('#lbSports').removeClass('warn');
//                 $('#inpSports').removeClass('alert-danger');
//            }
//            
//            if(vInterest == ''){
//                $('#lbInterest').addClass('warn');
//                $('#inpInterest').addClass('alert-danger');
//                $('#inpInterest').attr('placeholder','Please enter your cultural/interest here!');
//            }
//            else{
//                 $('#lbInterest').removeClass('warn');
//                 $('#inpInterest').removeClass('alert-danger');
//            }
            $('html, body').animate({ scrollTop: 0 }, 'fast');
//            $('html,body').scrollTop(0);

        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _Name:$('#inpName').val(),
              _NikName:$('#inpNikName').val(),
              _Bday:vBday,
              _Stat:$('#inpStat').val(),
              _Contact:$('#inpContact').val(),
              _Email:$('#inpEmail').val(),
              _Add:$('#inpAdd').val(),
              _Comp:$('#inpComp').val(),
              _CompAdd:$('#inpCompAdd').val(),
              _Occu:$('#inpOccu').val(),
              _Field:$('#inpField').val(),
              _Plate:$('#inpPlate').val(),
              _Unit:$('#inpUnit').val(),
              _Usage:$('#inpUsage').val(),
              _Sports:$('#inpSports').val(),
              _Interest:$('#inpInterest').val()
            };
            $.ajax({
                 url:'NewCust',
                 type:'post',
                 data:{
                     data:window.btoa(JSON.stringify(ajx))
                 },
                 success:function(data){
                    if(data == 'Success'){
                        $('#ncPanel').removeClass('panel-info');
                        $('#ncPanel').removeClass('panel-danger');
                        $('#ncPanel').addClass('panel-success');
                        $('#ncH').html('SUCCESS!');
                        $('#txtDiv').hide();
                        $('#btnSave').hide();
                        $('#ncsPanel').addClass('text-center');
                        $('#pInfo').show();
                        $('.ncsInfo').show();
                     }
                     else{
                        $('.warn').removeClass('warn'); 
                        $('.alert-danger').removeClass('alert-danger'); 
                        $('#ncPanel').removeClass('panel-info');
                        $('#ncPanel').addClass('panel-danger');
                        $('#ncH').html("PLATE NUMBER IS NOT AVAILABLE!");
                        $('#inpPlate').val('');
                        $('#inpPlate').addClass('alert-danger');
                        $('#inpPlate').attr('placeholder','Plate number is already exist!');
                     }
                 }
            });
        } 
    });
    
    $(document).on('click','#btnSalSur',function(){
        var flag=0;
        
        $('.radioC').each(function(){
           var name='';
           name=$(this).attr('name');
           if($("input:radio[name=" + name + "]").is(":checked")){
               $("#" + name).removeClass('warn');
            }
            else{
                    if($(this).hasClass('txt')){
                        var val = '';
                        val = $(this).val();
                        if(val==''){
                           $("#" + name).removeClass('warn');
                        }
                        else{
                            $("#" + name).removeClass('warn');
                        }
                    }
                    else if($(this).hasClass('lb')){
                        $(this).addClass('warn');
                    }
                    else if($(this).hasClass('cb')){
                        var val = '';
                        val = $(this).val();
                        if(val==''){
                           $("#" + name).addClass('warn');
                            flag=1;
                        }
                        else{
                            $("#" + name).removeClass('warn');
                        }
                    }
                    else{
                         flag=1;
                    }
                }
        });
        
        var AA = $('#ArrTime').val();
        var ampm = AA.substring(6,8);
        
        var vDate = $('#ArrDate').val();
        var VDateYR = vDate.substring(6,10);
        var vDateMM = vDate.substring(0,2);
        var vDateDD = vDate.substring(3,5);
        var ArDate = VDateYR + "-" + vDateMM + "-" + vDateDD;
        var ArTme ='';
        var mH = '';
        
        switch(ampm) {
      
            case 'AM':
                var tme = $('#ArrTime').val();
                var h = tme.substring(0,2);
                if(h == '12'){
                    mH = '00' + tme.substring(2,5);
                    ArTme = ArDate + " " + mH + ':00';
                }
                else{
                    var hm = tme.substring(0,5);
                    ArTme = ArDate + " " + hm + ':00';
                }
                break;
            case 'PM':
                var tme = $('#ArrTime').val();
                var h = tme.substring(0,2);
                switch(h) {
                    case '12':
                        mH = '12' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '01':
                        mH = '13' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '02':
                        mH = '14' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '03':
                        mH = '15' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '04':
                        mH = '16' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;    
                    case '05':
                        mH = '17' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break;
                    case '06':
                        mH = '18' + tme.substring(2,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '07':
                        mH = '19:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '08':
                        mH = '20:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '09':
                        mH = '21:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break 
                    case '10':
                        mH = '22:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    case '11':
                        mH = '23:' + tme.substring(3,5);
                        ArTme = ArDate + " " + mH + ':00';
                        break
                    default:
                    };
            break;
        default:
            };

        var mp = $('#MP').val();
        var tTyp = $('#TOT').val();
        
        $('#lbMP').removeClass('warn');
        $('#lbTOT').removeClass('warn');
        $('#lbTA').removeClass('warn');
        $('#lbTAt').removeClass('warn');
        
        if(mp == '' || ArTme == '' || tTyp == ''){
            flag=1;
            if(mp == ''){
                $('#lbMP').addClass('warn');
            }
            
            if(tTyp == ''){
                $('#lbTOT').addClass('warn');
            }
            
            if(ArTme == ''){
                $('#lbTA').addClass('warn');
                $('#lbTAt').addClass('warn');
            }
        }
        
        var _arr = [];
        var _i = 0;
        
         $('.radioC').each(function(){
            if($(this).is(':checked')){
                _arr[_i] = {
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _mp:$('#MP').val(),
                    _tot:$('#TOT').val(),
                    _arrTime:ArTme
                };
                _i++;    
            }
            else{
                if($(this).hasClass('txt')){
                    _arr[_i]={  
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _mp:$('#MP').val(),
                    _tot:$('#TOT').val(),
                    _arrTime:ArTme
                };
                _i++;
                }
                else if($(this).hasClass('cb')){
                    _arr[_i]={  
                    _qno:$(this).attr('name'),
                    _ans:$(this).val(),
                    _mp:$('#MP').val(),
                    _tot:$('#TOT').val(),
                    _arrTime:ArTme
                };
                _i++;
                }
            }
         });
         
         if (flag == 0){
                $.ajax({
                url:'SalSurDone',
                type:'post',
                data:{
                    data:window.btoa(JSON.stringify(_arr))
                },
                success:function(data){
                    if(data == 'Success'){
                        window.location.replace('SurveyDone');
                    }
                }
            });
         }
         else{
            $('#PanelTyp').removeClass('panel-default');
            $('#PanelTyp').addClass('panel-danger');
            $('#SerSurPh').html("Please complete each number and field below!");
            window.scrollTo(0,0);
         }
    }); 
    
 }); 


