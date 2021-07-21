
function chkDesig(set){
    
    switch (set){
        case "Add":
            var vDesig = $('#inpDesig').val();
            if(vDesig == ''){
                $("#LBinpDesig").addClass('lbWarn');
                $("#inpDesig").addClass('alert-danger');
                $("#inpDesig").attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
                return 1;  
            }
            else{
                $("#LBinpDesig").removeClass('lbWarn');
                $("#inpDesig").removeClass('alert-danger');
                $("#inpDesig").attr('placeholder',"Enter Designation");
                return 0;
            }
            
            break;
        case "Upd":
            var vDesig = $('#inpUpdDesig').val();
            if(vDesig == ''){
                $("#LBinpUpdDesig").addClass('lbWarn');
                $("#inpUpdDesig").addClass('alert-danger');
                $("#inpUpdDesig").attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
                return 1;  
            }
            else{
                $("#LBinpUpdDesig").removeClass('lbWarn');
                $("#inpUpdDesig").removeClass('alert-danger');
                $("#inpUpdDesig").attr('placeholder',"Enter Designation");
                 return 0;
            }
            break;
    }
}
   
function insDesig(){
    var flag = 0;
    var vDesig = $('#inpDesig').val();
    var vSurRec = 0;
    var vCustRec = 0;
    var vQ = 0;
    var vCustRep = 0;
    var vTOT =0;
    var vVU = 0;
    var vRep = 0;
    var vSS = 0;
    
    flag = chkDesig("Add");

    if (flag == 0){
        
        if ($('#chkSurRec').is(':checked')){
            vSurRec = 1;
        }
        if ($('#chkCustRec').is(':checked')){
            vCustRec = 1;
        }
        if ($('#chkQ').is(':checked')){
            vQ = 1;
        }    
        if ($('#chkCustRep').is(':checked')){
            vCustRep = 1;
        }
        if ($('#chkTOT').is(':checked')){
            vTOT = 1;
        }
        if ($('#chkVU').is(':checked')){
            vVU = 1;
        }
        if ($('#chkRep').is(':checked')){
            vRep = 1;
        }
        if ($('#chkSS').is(':checked')){
            vSS = 1;
        }

        var ajx = {
            _Desig:vDesig,
            _SurRec:vSurRec,
            _CustRec:vCustRec,
            _Q:vQ,
            _CustRep:vCustRep,
            _TOT:vTOT,
            _VU:vVU,
            _Rep:vRep,
            _SS:vSS
        };
        
        $.ajax({
            url:'insDesig',
            type:'POST',
            data:{
                data:JSON.stringify(ajx)
            },
            success:function(data){
                if (data == "Success"){
                    window.location.replace('shwDesig');
                }
                else{
                    $("#inpDesig").val('');
                    $("#LBinpDesig").addClass('lbWarn');
                    $("#inpDesig").addClass('alert-danger');
                    $("#inpDesig").attr('placeholder',"ALREADY EXIST!");  
                }
            }
        });
    }
}

function EditVwe(desig){
    
    var ajx = {
            _DesigId:desig
        };
        
        $.ajax({
            url:'getDesig',
            type:'get',
            data:{
                data:JSON.stringify(ajx)
            },
            success:function(data){
                var _data = jQuery.parseJSON(data);
                var _get = '';

                _get = _data[0];
                
                var appDesig = '';
                appDesig += '<input class="form-control" id="inpDesigId" type="hidden" value="' + _get['Id'] + '" maxlength="30">';
                appDesig += '<div class="col-md-12">';
                appDesig += '<label for="inpUpdDesig" id="LBinpUpdDesig">Designation</label>';
                appDesig += '<input class="form-control" id="inpUpdDesig" name="inpUpdDesig" value = "' + _get['Designation'] + '"type="text" aria-describedby="emailHelp" placeholder="Enter Designation">';
                appDesig += '<label></label>';
                appDesig += '</div>'; 
                
//                appDesig += '<div class="col-md-12 MainHome">';
//                appDesig += '<div class="form-check">';
//                appDesig += '<label class="form-check-label" id="LBchkSurRec">';
//                if (_get['SurveyRec'] == 1){
//                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdSurRec" name="chkSurRec" checked> Survey Record</label>';
//                }
//                else{
//                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdSurRec" name="chkSurRec"> Survey Record</label>';
//                }
//                appDesig += '</div>';
//                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkCustRec">';
                if(_get['CustRec'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdCustRec" name="chkCustRec" checked> Customer Record</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdCustRec" name="chkCustRec"> Customer Record</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkQ">';
                if(_get['Questions'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdQ" name="chkQ" checked> Questionaires</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdQ" name="chkQ"> Questionaires</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkCustRep">';
                if(_get['CustRep'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdCustRep" name="chkCustRep" checked> Customer Representatives</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdCustRep" name="chkCustRep"> Customer Representatives</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">'
                appDesig += '<label class="form-check-label" id="LBchkTOT">';
                if (_get['TypeOfTrans'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdTOT" name="chkTOT" checked> Type of Transactions</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdTOT" name="chkTOT"> Type of Transactions</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkVU">';
                if(_get['VehUnit'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdVU" name="chkVU" checked> Vehicle Unit</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdVU" name="chkVU"> Vehicle Unit</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkRep">';
                if(_get['Reports'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdRep" name="chkRep" checked> Reports</label>';
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdRep" name="chkRep"> Reports</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                appDesig += '<div class="col-md-12">';
                appDesig += '<div class="form-check">';
                appDesig += '<label class="form-check-label" id="LBchkSS">';
                if(_get['Settings'] == 1){
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdSS" name="chkSS" checked> System Settings</label>';  
                }
                else{
                    appDesig += '<input class="form-check-input" type="checkbox" id="chkUpdSS" name="chkSS"> System Settings</label>';
                }
                appDesig += '</div>';
                appDesig += '</div>';
                
                $('.appDesig').empty();
                $('.appDesig').append(appDesig);
                appDesig = '';
            }
        });
}

function EditDesig(){
    var flag = 0;
    var vDesigId = $('#inpDesigId').val();
    var vDesig = $('#inpUpdDesig').val();
    var vSurRec = 0;
    var vCustRec = 0;
    var vQ = 0;
    var vCustRep = 0;
    var vTOT =0;
    var vVU = 0;
    var vRep = 0;
    var vSS = 0;
    
    flag = chkDesig("Upd");
    
    if (flag == 0){
        
//        if ($('#chkUpdSurRec').is(':checked')){
//            vSurRec = 1;
//        }
        if ($('#chkUpdCustRec').is(':checked')){
            vCustRec = 1;
        }
        if ($('#chkUpdQ').is(':checked')){
            vQ = 1;
        }    
        if ($('#chkUpdCustRep').is(':checked')){
            vCustRep = 1;
        }
        if ($('#chkUpdTOT').is(':checked')){
            vTOT = 1;
        }
        if ($('#chkUpdVU').is(':checked')){
            vVU = 1;
        }
        if ($('#chkUpdRep').is(':checked')){
            vRep = 1;
        }
        if ($('#chkUpdSS').is(':checked')){
            vSS = 1;
        }

        var ajx = {
            _DesigId:vDesigId,
            _Desig:vDesig,
//            _SurRec:vSurRec,
            _CustRec:vCustRec,
            _Q:vQ,
            _CustRep:vCustRep,
            _TOT:vTOT,
            _VU:vVU,
            _Rep:vRep,
            _SS:vSS
        };
        
        $.ajax({
            url:'edtDesig',
            type:'POST',
            data:{
                data:JSON.stringify(ajx)
            },
            success:function(data){
                if (data == "Success"){
                    window.location.replace('shwDesig');
                }
            }
        });
    }
}



$(function(){
    $('.MainHome').hide();
    
    $(document).on('click','#aRegDesig',function(){
        insDesig();
    });
    
    $(document).on('click','#EditDesig',function(){
        var vId = $(this).val();
        EditVwe(vId);
    });
    
    $(document).on('click','#updDesig',function(){
        EditDesig();
    });
    
    $(document).on('click','#DelDesig',function(){
        var Desig = $(this).val();
        var appDel;
        appDel = '<input type="hidden" Id="delDesig" value="' + Desig + '">';
        
        $('.HideDesigId').empty();
        $('.HideDesigId').append(appDel);
        appDel = '';
    });
    
    $(document).on('click','#btnDelDesig',function(){
          var Desig = $('#delDesig').val();
          var toAjx='';
            toAjx={
              _Desig:Desig
            };
            
            $.ajax({
                 url:'delDesig',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('shwDesig');
                     }
                 }
            });     
    });
    
});