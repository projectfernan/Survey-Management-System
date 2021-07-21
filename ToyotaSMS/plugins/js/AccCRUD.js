
function chkFields(mod){
    var ret = false;
    
    switch (mod){
        case "inp":
            $('.inp').each(function(){
                var name = $(this).attr('name');
                var data = $(this).val();

                if (data == ''){
                    $('#LB' + name).addClass('lbWarn');
                    $('#' + name).addClass('alert-danger');
        //            $('#' + name).attr('placeholder',"Please Don't leave a blank!");
                    $('.headMsg').show();
                    $('#ErrMsg').html("Please don't leave a blank!");

                    ret = true;
                }
                else{
                    $('#LB' + name).removeClass('lbWarn');
                    $('#' + name).removeClass('alert-danger');
        //            $('#' + name).attr('placeholder',"Enter " + name);
                    $('.headMsg').hide();
                    $('#ErrMsg').html("");
                }
            });
            break;
        case "cp":
            $('.cp').each(function(){
                var name = $(this).attr('name');
                var data = $(this).val();

                if (data == ''){
                    $('#LB' + name).addClass('lbWarn');
                    $('#' + name).addClass('alert-danger');
        //            $('#' + name).attr('placeholder',"Please Don't leave a blank!");
                    $('.headMsgCp').show();
                    $('#ErrMsgCp').html("Please don't leave a blank!");

                    ret = true;
                }
                else{
                    $('#LB' + name).removeClass('lbWarn');
                    $('#' + name).removeClass('alert-danger');
        //            $('#' + name).attr('placeholder',"Enter " + name);
                    $('.headMsgCp').hide();
                    $('#ErrMsgCp').html("");
                }
            });
            
            break;
    }
 
    return ret;
}

function chkPwdMatch(mod){
   
    var ret = false;
    
    switch(mod){
        case "ins":
            var pwd = $('#inpPWD').val();
            var confirm = $('#inpConfirm').val();

            if (pwd == confirm){
                 $('#LBinpPWD').removeClass('lbWarn');
                 $('#inpPWD').removeClass('alert-danger');
                 $('#LBinpConfirm').removeClass('lbWarn');
                 $('#inpConfirm').removeClass('alert-danger');

                 $('.headMsg').hide();
                 $('#ErrMsg').html("");
            }
            else{
                 $('#LBinpPWD').addClass('lbWarn');
                 $('#inpPWD').addClass('alert-danger');
                 $('#LBinpConfirm').addClass('lbWarn');
                 $('#inpConfirm').addClass('alert-danger');

                 $('.headMsg').show();
                 $('#ErrMsg').html("Password confirmation mismatch!");
                 ret = true;
            }
            
            break;
        case "cp":
            var pwd = $('#inpPWDcp').val();
            var confirm = $('#inpConfirmCp').val();

            if (pwd == confirm){
                 $('#LBinpPWDcp').removeClass('lbWarn');
                 $('#inpPWDcp').removeClass('alert-danger');
                 $('#LBinpConfirmCp').removeClass('lbWarn');
                 $('#inpConfirmCp').removeClass('alert-danger');

                 $('.headMsgCp').hide();
                 $('#ErrMsgCp').html("");
            }
            else{
                 $('#LBinpPWDcp').addClass('lbWarn');
                 $('#inpPWDcp').addClass('alert-danger');
                 $('#LBinpConfirmCp').addClass('lbWarn');
                 $('#inpConfirmCp').addClass('alert-danger');

                 $('.headMsgCp').show();
                 $('#ErrMsgCp').html("Password confirmation mismatch!");
                 ret = true;
            }
            break;
    }
            
    return ret;
}

function resetWarn(mod){
    switch(mod){
        case "inp":
            $('.inp').each(function(){
                var name = $(this).attr('name');
                
                $('#LB' + name).removeClass('lbWarn');
                $('#' + name).removeClass('alert-danger');

                $('.headMsg').hide();
                $('#ErrMsg').html("");
            });
            break;
        case "cp":
            $('.cp').each(function(){
                var name = $(this).attr('name');
                
                $('#LB' + name).removeClass('lbWarn');
                $('#' + name).removeClass('alert-danger');
                
                $('.headMsgCp').hide();
                $('#ErrMsgCp').html("");
            });
            
            break;
    }
    
}

function insAcc(){
    
    var vUid = $('#inpUID').val();
    var vPwd = $('#inpPWD').val();
    var vName = $('#inpName').val();
    var vDesig = $('#inpDesig').val();
    
    if (chkFields("inp") == false){
        if (chkPwdMatch('ins') == false){
            
            var ajx = {
                _Uid:vUid,
                _Pwd:vPwd,
                _Name:vName,
                _Desig:vDesig
            };

            $.ajax({
               url:'insAcc',
               type:'post',
               data:{
                    data:window.btoa(JSON.stringify(ajx))
               },
               success:function(data){
                   if (data == "Success"){
                       window.location.replace('shwAcc');
                   }
                   else{
                       $('.headMsg').show();
                       $('#ErrMsg').html("Username already exist!");

                       $('#LBinpUID').addClass('lbWarn');
                       $('#inpUID').addClass('alert-danger');
                   }
               }
            });
        }   
    }
}

function edtAcc(){
    
    var vUid = $('#inpUID').val();
    var vName = $('#inpName').val();
    var vDesig = $('#inpDesig').val();
    
    if (chkFields("inp") == false){
        
        var ajx = {
            _Uid:vUid,
            _Name:vName,
            _Desig:vDesig
        };

        $.ajax({
           url:'edtAcc',
           type:'post',
           data:{
                data:window.btoa(JSON.stringify(ajx))
           },
           success:function(data){
               if (data == "Success"){
                   window.location.replace('shwAcc');
               }
           }
        });  
    }
}

function ChkOldPwd(Uid){
    
    var vOldPwd = $('#inpOldPwd').val();
    
    if (chkFields("cp") == false){
        var ajx = {
        _Uid:Uid,
        _OldPwd:vOldPwd
        };

        $.ajax({
            url:'chkOldPwd',
            type:'POST',
            data:{
                data:window.btoa(JSON.stringify(ajx))
            },
            success:function(data){
                if(data == "Success"){
                    $('#LBinpOldPwd').removeClass('lbWarn');
                    $('#inpOldPwd').removeClass('alert-danger');

                    $('.headMsgCp').hide();
                    $('#ErrMsgCp').html("");

                    if(chkPwdMatch('cp') == false){
                        ChangeOldPwd(Uid);
                    }
                }
                else{
                   $('#LBinpOldPwd').addClass('lbWarn');
                   $('#inpOldPwd').addClass('alert-danger');

                   $('.headMsgCp').show();
                   $('#ErrMsgCp').html("Old password is wrong!");
                }
            }
        });  
    }
}

function ChangeOldPwd(Uid){
    var vNewPwd = $('#inpPWDcp').val();
    
    var ajx = {
      _Uid:Uid,
      _NewPwd:vNewPwd
    };
    
    $.ajax({
        url:'changePwd',
        type:'POST',
        data:{
            data:window.btoa(JSON.stringify(ajx))
        },
        success:function(data){
            if(data == "Success"){
               window.location.replace('SystemLogin');
            }
        }
    });
}

function delAcc(Uid){
    var ajx = {
      _Uid:Uid  
    };
    
    $.ajax({
        url:'delAcc',
        type:'POST',
        data:{
            data:window.btoa(JSON.stringify(ajx))
        },
        success:function(data){
            if(data == "Success"){
                window.location.replace('shwAcc');
            }
        }
    });
}

$(function(){
    $('.headMsg').hide();
    $('.headMsgCp').hide();
    
    $(document).on('click','#aRegNewAcc',function(){
        insAcc();
    });
    
    $(document).on('click','#EditAcc',function(){
        resetWarn("inp");

        var vUid = $(this).val();
        $('#inpUID').val(vUid);

        var ajx = {
          _Uid:vUid  
        };

        $.ajax({
           url:'chkAcc',
           type:'post',
           data:{
               data:window.btoa(JSON.stringify(ajx))
           },
           success:function(data){
               var _data = jQuery.parseJSON(data);
               var _get = _data[0];

               $('#inpName').val(_get['Name']);
               $('#inpDesig').val(_get['Designation']);
           }
        });
    });
    
    $(document).on('click','#aUpdAcc',function(){
       edtAcc();
    });
    
    $(document).on('click','#EditPwd',function(){
        resetWarn("cp");
        var vUid = $(this).val();
        $('#inpUIDcp').val(vUid);
    });
    
    $(document).on('click','#aCp',function(){
        var vUid = $('#inpUIDcp').val(); 
        ChkOldPwd(vUid);
    });
    
    $(document).on('click','#DelAcc',function(){
        var Uid = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delUid" value="' + Uid + '">';
        
        $('.HideUid').empty();
        $('.HideUid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#aDelAcc',function(){
        var vUid = $('#delUid').val(); 
        delAcc(vUid);
    });
});

