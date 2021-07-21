$(function(){ 
    $(document).on('click','#btnVwe',function(){
        var plate;
        var SurDT;
        plate = $(this).attr('name');
        SurDT = $(this).val();
        
        var toAjx='';
            toAjx={
              _plate:plate,
              _SurDT:SurDT
            };
            
            $.ajax({
                 url:'vweSalAns',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    var lup=0;
                    
                    $('#modSalsur').find('td').remove();
                    var AnsList = '';
                    $.each(_data,function(){
                        _get = _data[lup];
                        
                        $('#Cust').html(_get['Customer']);
                        $('#ArrTime').html(_get['ArrivalTime']);
                        $('#TypeOfTrans').html(_get['TypeOfTransaction']);
                        $('#mktg').html(_get['MktgProf']);
                        
                        AnsList += '<tr>';
                        AnsList += '<td>' + _get['QuestionNo']+ '</td>';
                        AnsList += '<td>' + _get['Question']+ '</td>';
                        AnsList += '<td>' + _get['Answer']+ '</td>';
                        AnsList += '</tr>';
                 
                        lup++;
                    });
                    
                    $('#modSalsur').find('tbody').append(AnsList);
                    AnsList='';
                    
             }

        });
    });
    
    
    $(document).on('click','#btnVweSer',function(){
        var plate;
        var SurDT;
        plate = $(this).attr('name');
        SurDT = $(this).val();
        
        var toAjx='';
            toAjx={
              _plate:plate,
              _SurDT:SurDT
            };
            
            $.ajax({
                 url:'vweSerAns',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    var lup=0;
                    
                    $('#modSersur').find('td').remove();
                    var AnsList = '';
                    $.each(_data,function(){
                        _get = _data[lup];
                        
                        $('#CustSer').html(_get['Customer']);
                        $('#ArrTimeSer').html(_get['ArrivalTime']);
                        $('#SerAdv').html(_get['ServiceAdvisor']);
                        
                        AnsList += '<tr>';
                        AnsList += '<td>' + _get['QuestionNo']+ '</td>';
                        AnsList += '<td>' + _get['Question']+ '</td>';
                        AnsList += '<td>' + _get['Answer']+ '</td>';
                        AnsList += '</tr>';
                 
                        lup++;
                    });
                    
                    $('#modSersur').find('tbody').append(AnsList);
                    AnsList='';
             }

        });
    });
    
    $(document).on('click','#btnEdit',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '';
        qNOapp += '<label for="inpQNo" id="lbQNo">Number</label>';
        qNOapp += '<input class="form-control" id="inpQNo" type="text" value="' + qNo + '" maxlength="3" aria-describedby="nameHelp" readonly>';
        
        $('.inpNo').empty();
        $('.inpNo').append(qNOapp);
        qNOapp = '';
        
        var toAjx='';
            toAjx={
              _qNo:qNo
            };
            $.ajax({
                 url:'ChkNewSalesQ',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    
                    _get = _data[0];
                    
                    var Qapp = '';
                    
                    Qapp += '<label for="exampleInputEmail1" id="lbSurveyQ">Survey Question</label>';
                    Qapp += '<input class="form-control" id="inpSurveyQ" type="text" value="' + _get['Ques'] + '" aria-describedby="emailHelp" placeholder="Enter survey question">';
                    $('.inpQ').empty();
                    $('.inpQ').append(Qapp);
                    Qapp = '';
                    
                    Qapp += '<label for="inpAnsTyp" id="lbAnsTyp">Answer Type</label>';
                    Qapp += '<select class="combobox form-control" id="inpAnsTyp" name="AT" value="' + _get['AT'] + '">';
                    Qapp += '<option style="display:none">'+ _get['AT'] +'</option>';
                    Qapp += '<option value="YesNo">YesNo</option>';
                    Qapp += '<option value="Comment">Comment</option>';
                    Qapp += '<option value="ExcellentPoor">ExcellentPoor</option>';
                    Qapp += '<option value="PoorAverageExcellent">PoorAverageExcellent</option>';
                    Qapp += '<option value="OverallSatisfaction">OverallSatisfaction</option>';
                    Qapp += '<option value="NetPromoterScore">NetPromoterScore</option>';
                    Qapp += '</select>';
                    $('.inpAT').empty();
                    $('.inpAT').append(Qapp);
                    Qapp = '';
                    
//                    Qapp += '<label for="inpGrp" id="lbGrp">Group</label>';
//                    Qapp += '<select class="combobox form-control" id="inpGrp" name="G" value="' + _get['Grp'] + '">';
//                    Qapp += '<option style="display:none">' + _get['Grp'] + '</option>';
//                    Qapp += '<option value="1">1</option>';
//                    Qapp += '<option value="2">2</option>';
//                    Qapp += '<option value="3">3</option>';
//                    Qapp += '<option value="4">4</option>';
//                    Qapp += '</select>';
//                    $('.inpG').empty();
//                    $('.inpG').append(Qapp);
                    Qapp = '';
             }    
        });
    });
      
    $(document).on('click','#btnMoDelete',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelete',function(){
          var qNo = $('#delQno').val();
          var toAjx='';
            toAjx={
              _qNo:qNo
            };
            $.ajax({
                 url:'DelSalesQ',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('ShowSalesQ');
                     }
                 }
            });     
    });
    
     $(document).on('click','#btnSerQEdt',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '';
        qNOapp += '<label for="inpQNo" id="lbQNo">Number</label>';
        qNOapp += '<input class="form-control" id="inpQNo" type="text" value="' + qNo + '" maxlength="3" aria-describedby="nameHelp" readonly>';
        
        $('.inpNo').empty();
        $('.inpNo').append(qNOapp);
        qNOapp = '';
        
        var toAjx='';
            toAjx={
              _qNo:qNo
            };
            $.ajax({
                 url:'ChkNewServiceQ',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    
                    _get = _data[0];
                    
                    var Qapp = '';
                    
                    Qapp += '<label for="exampleInputEmail1" id="lbSurveyQ">Survey Question</label>';
                    Qapp += '<input class="form-control" id="inpSurveyQ" type="text" value="' + _get['Ques'] + '" aria-describedby="emailHelp" placeholder="Enter survey question">';
                    $('.inpQ').empty();
                    $('.inpQ').append(Qapp);
                    Qapp = '';
                    
                    Qapp += '<label for="inpAnsTyp" id="lbAnsTyp">Answer Type</label>';
                    Qapp += '<select class="combobox form-control" id="inpAnsTyp" name="AT" value="' + _get['AT'] + '">';
                    Qapp += '<option style="display:none">'+ _get['AT'] +'</option>';
                    Qapp += '<option value="YesNo">YesNo</option>';
                    Qapp += '<option value="Comment">Comment</option>';
                    Qapp += '<option value="ExcellentPoor">ExcellentPoor</option>';
                    Qapp += '<option value="PoorAverageExcellent">PoorAverageExcellent</option>';
                    Qapp += '<option value="OverallSatisfaction">OverallSatisfaction</option>';
                    Qapp += '<option value="NetPromoterScore">NetPromoterScore</option>';
                    Qapp += '</select>';
                    $('.inpAT').empty();
                    $('.inpAT').append(Qapp);
                    Qapp = '';
                    
//                    Qapp += '<label for="inpGrp" id="lbGrp">Group</label>';
//                    Qapp += '<select class="combobox form-control" id="inpGrp" name="G" value="' + _get['Grp'] + '">';
//                    Qapp += '<option style="display:none">' + _get['Grp'] + '</option>';
//                    Qapp += '<option value="1">1</option>';
//                    Qapp += '<option value="2">2</option>';
//                    Qapp += '<option value="3">3</option>';
//                    Qapp += '<option value="4">4</option>';
//                    Qapp += '</select>';
//                    $('.inpG').empty();
//                    $('.inpG').append(Qapp);
//                    Qapp = '';
             }    
        });
    });
    
    $(document).on('click','#btnSerQDel',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelSerQ',function(){
          var qNo = $('#delQno').val();
          var toAjx='';
            toAjx={
              _qNo:qNo
            };
            $.ajax({
                 url:'DelServiceQ',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('ShowServiceQ');
                     }
                 }
            });     
    });
    
    $(document).on('click','#EditTOT',function(){
        var Tot = $(this).val();
        var id = $(this).attr('name');
 
        var TOTapp;
        TOTapp = '';
        TOTapp += '<label for="inpQNo" id="lbUpdTot">Type Of Transaction</label>';
        TOTapp += '<input class="form-control" id="inpUpdTot" type="text" value="' + Tot + '" maxlength="30">';
        TOTapp += '<input class="form-control" id="inpId" type="hidden" value="' + id + '" maxlength="30">';
        $('.inpTOT').empty();
        $('.inpTOT').append(TOTapp);
        TOTapp = '';
    });
    
    $(document).on('click','#DelTOT',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelTOT',function(){
          var ToT = $('#delQno').val();
          var toAjx='';
            toAjx={
              _ToT:ToT
            };
            
            $.ajax({
                 url:'delTypeOfTrans',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('shwTypeOfTrans');
                     }
                 }
            });     
    });

    $(document).on('click','#EditUM',function(){
        var UM = $(this).val();
        var id = $(this).attr('name');
 
        var UMapp;
        UMapp = '';
        UMapp += '<label for="inpUpdUM" id="lbUpdUM">Unit Model</label>';
        UMapp += '<input class="form-control" id="inpUpdUM" type="text" value="' + UM + '" maxlength="30">';
        UMapp += '<input class="form-control" id="inpId" type="hidden" value="' + id + '" maxlength="30">';
        $('.inpUM').empty();
        $('.inpUM').append(UMapp);
        UMapp = '';
    });
    
    $(document).on('click','#DelUM',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelUM',function(){
          var UM = $('#delQno').val();
          var toAjx='';
            toAjx={
              _UM:UM
            };
            
            $.ajax({
                 url:'delUM',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('shwUM');
                     }
                 }
            });     
    });
    
    $(document).on('click','#EditMktg',function(){
        var vId = $(this).val();
        
        var ajx = {
            _MktgId:vId
        };
        
        $.ajax({
            url:'getMktg',
            type:'get',
            data:{
                data:JSON.stringify(ajx)
            },
            success:function(data){
                var _data = jQuery.parseJSON(data);
                var _get = '';

                _get = _data[0];
                
                var appMktg = '';
                appMktg += '<label for="inpMktg" id="LBinpMktg">Marketing Prof.</label>';
                appMktg += '<input class="form-control inpUpd" id="inpUpdMktg" name="inpMktg" type="text" value = "' + _get['MktgProf'] + '"placeholder="Enter Marketing Prof.">';
                appMktg += '<input class="form-control" id="inpMktgId" type="hidden" value="' + _get['MktgId'] + '" maxlength="30">';
                $('.appMktg').empty();
                $('.appMktg').append(appMktg);
                appMktg = '';
                
                var appMktgG = '';
                appMktgG += '<label for="inpMktgGen" id="LBinpG">Gender</label>';
                appMktgG += '<select class="combobox form-control inpUpd" id="inpUpdG" name="inpUpdG" value="'+ _get['Gender'] +'">';
                 appMktgG +='<option style="display:none">' + _get['Gender'] + '</option>'; 
                appMktgG += '<option value="Male">Male</option>'; 
                appMktgG += '<option value="Female">Female</option>';
                appMktgG += '</select>';
                $('.appMktgG').empty();
                $('.appMktgG').append(appMktgG);
                appMktgG = '';
            }
        });
    });
    
    $(document).on('click','#DelMktg',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelMktg',function(){
          var Mktg = $('#delQno').val();
          var toAjx='';
            toAjx={
              _Mktg:Mktg
            };
            
            $.ajax({
                 url:'delMktg',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('shwMktg');
                     }
                 }
            });     
    });
    
    $(document).on('click','#EditAdv',function(){
        var vId = $(this).val();
        
        var ajx = {
            _AdvId:vId
        };
        
        $.ajax({
            url:'getAdv',
            type:'get',
            data:{
                data:JSON.stringify(ajx)
            },
            success:function(data){
                var _data = jQuery.parseJSON(data);
                var _get = '';

                _get = _data[0];
                
                var appMktg = '';
                appMktg += '<label for="inpMktg" id="LBinpMktg">Marketing Prof.</label>';
                appMktg += '<input class="form-control inpUpd" id="inpUpdAdv" name="inpAdv" type="text" value = "' + _get['ServiceAdvisor'] + '"placeholder="Enter Service Advisor">';
                appMktg += '<input class="form-control" id="inpAdvId" type="hidden" value="' + _get['serId'] + '" maxlength="30">';
                $('.appAdv').empty();
                $('.appAdv').append(appMktg);
                appMktg = '';
                
                var appMktgG = '';
                appMktgG += '<label for="inpMktgGen" id="LBinpG">Gender</label>';
                appMktgG += '<select class="combobox form-control inpUpd" id="inpUpdG" name="inpUpdG" value="'+ _get['Gender'] +'">';
                 appMktgG +='<option style="display:none">' + _get['Gender'] + '</option>'; 
                appMktgG += '<option value="Male">Male</option>'; 
                appMktgG += '<option value="Female">Female</option>';
                appMktgG += '</select>';
                $('.appAdvG').empty();
                $('.appAdvG').append(appMktgG);
                appMktgG = '';
            }
        });
    });
    
    $(document).on('click','#DelAdv',function(){
        var qNo = $(this).val();
        var qNOapp;
        qNOapp = '<input type="hidden" Id="delQno" value="' + qNo + '">';
        
        $('.HideQid').empty();
        $('.HideQid').append(qNOapp);
        qNOapp = '';
    });
    
    $(document).on('click','#btnDelAdv',function(){
          var Mktg = $('#delQno').val();
          var toAjx='';
            toAjx={
              _Adv:Mktg
            };
            
            $.ajax({
                 url:'delAdv',
                 type:'post',
                 data:{
//                     data:window.btoa(JSON.stringify(toAjx))
                       data:JSON.stringify(toAjx)
                 },
                 success:function(data){
                     if(data == 'Success'){
                       window.location.replace('shwAdv');
                     }
                 }
            });     
    });
    
});
