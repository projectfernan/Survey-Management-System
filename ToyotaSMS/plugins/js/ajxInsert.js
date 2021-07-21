$(function(){
  
  $(document).on('click','#aRegQSales',function(){
        var chk = 0;
        var vNo = $('#inpQNo').val();
        var vSurveyQ = $('#inpSurveyQ').val();
        var vAnsTyp = $('#inpAnsTyp').val();
        var vGrp = $('#inpGrp').val();
        
        if (vNo == ''|| vSurveyQ == '' || vAnsTyp == '' || vGrp == ''){
            chk = 1;
            
            if(vNo == ''){
                $('#lbQNo').addClass('lbWarn');
                $('#inpQNo').addClass('alert-danger');
                $('#inpQNo').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbQNo').removeClass('lbWarn');
                 $('#inpQNo').removeClass('alert-danger');
                 $('#inpQNo').attr('placeholder',"Enter question number");
            }
            if(vSurveyQ == ''){
                $('#lbSurveyQ').addClass('lbWarn');
                $('#inpSurveyQ').addClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"PLEASE DON'T LEAVE SURVEY QUESTION BLANK!");
            }
            else{
                $('#lbSurveyQ').removeClass('lbWarn');
                $('#inpSurveyQ').removeClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"Enter surevey question");
            }
            if (vAnsTyp == ''){
                $('#lbAnsTyp').addClass('lbWarn');
                $('#inpAnsTyp').addClass('alert-danger');
            }else{
                $('#lbAnsTyp').removeClass('lbWarn');
                $('#inpAnsTyp').removeClass('alert-danger');
            }
            if (vGrp == ''){
                $('#lbGrp').addClass('lbWarn');
                $('#inpGrp').addClass('alert-danger');
            }else{
                $('#lbGrp').removeClass('lbWarn');
                $('#inpGrp').removeClass('alert-danger');
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _No:$('#inpQNo').val(),
              _SurveyQ:$('#inpSurveyQ').val(),
              _AnsTyp:$('#inpAnsTyp').val(),
              _Grp:1
            };
            $.ajax({
                 url:'insNewSalesQ',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('ShowSalesQ');
                     }
                     else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#lbQNo').addClass('lbWarn');
                        $('#inpQNo').addClass('alert-danger');
                        $('#inpQNo').val('');
                        $('#inpQNo').attr('placeholder',"ALREADY EXIST!");
                     }
                 }
            });
        } 
    });
    
    $(document).on('click','#aEdtQSales',function(){
        
        var chk = 0;
        var vNo = $('#inpQNo').val();
        var vSurveyQ = $('#inpSurveyQ').val();
        var vAnsTyp = $('#inpAnsTyp').val();
        var vGrp = $('#inpGrp').val();
        
        if (vNo == ''|| vSurveyQ == '' || vAnsTyp == '' || vGrp == ''){
            chk = 1;
            
            if(vNo == ''){
                $('#lbQNo').addClass('lbWarn');
                $('#inpQNo').addClass('alert-danger');
                $('#inpQNo').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbQNo').removeClass('lbWarn');
                 $('#inpQNo').removeClass('alert-danger');
                 $('#inpQNo').attr('placeholder',"Enter question number");
            }
            if(vSurveyQ == ''){
                $('#lbSurveyQ').addClass('lbWarn');
                $('#inpSurveyQ').addClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"PLEASE DON'T LEAVE SURVEY QUESTION BLANK!");
            }
            else{
                $('#lbSurveyQ').removeClass('lbWarn');
                $('#inpSurveyQ').removeClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"Enter surevey question");
            }
            if (vAnsTyp == ''){
                $('#lbAnsTyp').addClass('lbWarn');
                $('#inpAnsTyp').addClass('alert-danger');
            }else{
                $('#lbAnsTyp').removeClass('lbWarn');
                $('#inpAnsTyp').removeClass('alert-danger');
            }
            if (vGrp == ''){
                $('#lbGrp').addClass('lbWarn');
                $('#inpGrp').addClass('alert-danger');
            }else{
                $('#lbGrp').removeClass('lbWarn');
                $('#inpGrp').removeClass('alert-danger');
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _No:$('#inpQNo').val(),
              _SurveyQ:$('#inpSurveyQ').val(),
              _AnsTyp:$('#inpAnsTyp').val(),
              _Grp:1
            };
            $.ajax({
                 url:'editNewSalesQ',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('ShowSalesQ');
                     }
                     else{
                         
                     }
                 }
            });
        }
    });
    
    $(document).on('click','#aRegQService',function(){
        var chk = 0;
        var vNo = $('#inpQNo').val();
        var vSurveyQ = $('#inpSurveyQ').val();
        var vAnsTyp = $('#inpAnsTyp').val();
        var vGrp = $('#inpGrp').val();
        
        if (vNo == ''|| vSurveyQ == '' || vAnsTyp == '' || vGrp == ''){
            chk = 1;
            
            if(vNo == ''){
                $('#lbQNo').addClass('lbWarn');
                $('#inpQNo').addClass('alert-danger');
                $('#inpQNo').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbQNo').removeClass('lbWarn');
                 $('#inpQNo').removeClass('alert-danger');
                 $('#inpQNo').attr('placeholder',"Enter question number");
            }
            if(vSurveyQ == ''){
                $('#lbSurveyQ').addClass('lbWarn');
                $('#inpSurveyQ').addClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"PLEASE DON'T LEAVE SURVEY QUESTION BLANK!");
            }
            else{
                $('#lbSurveyQ').removeClass('lbWarn');
                $('#inpSurveyQ').removeClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"Enter surevey question");
            }
            if (vAnsTyp == ''){
                $('#lbAnsTyp').addClass('lbWarn');
                $('#inpAnsTyp').addClass('alert-danger');
            }else{
                $('#lbAnsTyp').removeClass('lbWarn');
                $('#inpAnsTyp').removeClass('alert-danger');
            }
            if (vGrp == ''){
                $('#lbGrp').addClass('lbWarn');
                $('#inpGrp').addClass('alert-danger');
            }else{
                $('#lbGrp').removeClass('lbWarn');
                $('#inpGrp').removeClass('alert-danger');
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _No:$('#inpQNo').val(),
              _SurveyQ:$('#inpSurveyQ').val(),
              _AnsTyp:$('#inpAnsTyp').val(),
              _Grp:1
            };
            $.ajax({
                 url:'insNewServiceQ',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('ShowServiceQ');
                     }
                     else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#lbQNo').addClass('lbWarn');
                        $('#inpQNo').addClass('alert-danger');
                        $('#inpQNo').val('');
                        $('#inpQNo').attr('placeholder',"ALREADY EXIST!");
                     }
                 }
            });
        } 
    });
    
     $(document).on('click','#aEdtQService',function(){
        
        var chk = 0;
        var vNo = $('#inpQNo').val();
        var vSurveyQ = $('#inpSurveyQ').val();
        var vAnsTyp = $('#inpAnsTyp').val();
        var vGrp = $('#inpGrp').val();
        
        if (vNo == ''|| vSurveyQ == '' || vAnsTyp == '' || vGrp == ''){
            chk = 1;
            
            if(vNo == ''){
                $('#lbQNo').addClass('lbWarn');
                $('#inpQNo').addClass('alert-danger');
                $('#inpQNo').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbQNo').removeClass('lbWarn');
                 $('#inpQNo').removeClass('alert-danger');
                 $('#inpQNo').attr('placeholder',"Enter question number");
            }
            if(vSurveyQ == ''){
                $('#lbSurveyQ').addClass('lbWarn');
                $('#inpSurveyQ').addClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"PLEASE DON'T LEAVE SURVEY QUESTION BLANK!");
            }
            else{
                $('#lbSurveyQ').removeClass('lbWarn');
                $('#inpSurveyQ').removeClass('alert-danger');
                $('#inpSurveyQ').attr('placeholder',"Enter surevey question");
            }
            if (vAnsTyp == ''){
                $('#lbAnsTyp').addClass('lbWarn');
                $('#inpAnsTyp').addClass('alert-danger');
            }else{
                $('#lbAnsTyp').removeClass('lbWarn');
                $('#inpAnsTyp').removeClass('alert-danger');
            }
            if (vGrp == ''){
                $('#lbGrp').addClass('lbWarn');
                $('#inpGrp').addClass('alert-danger');
            }else{
                $('#lbGrp').removeClass('lbWarn');
                $('#inpGrp').removeClass('alert-danger');
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _No:$('#inpQNo').val(),
              _SurveyQ:$('#inpSurveyQ').val(),
              _AnsTyp:$('#inpAnsTyp').val(),
              _Grp:1
            };
            $.ajax({
                 url:'editServiceQ',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('ShowServiceQ');
                     }
                     else{
                         
                     }
                 }
            });
        }
    });
    
    $(document).on('click','#aRegTypeOfTrans',function(){

        var chk = 0;
        var vTypeOfTrans = $('#inpTypeOfTrans').val();

        if (vTypeOfTrans == ''){
            chk = 1;
            
            if(vTypeOfTrans == ''){
                $('#lbTypeOfTrans').addClass('lbWarn');
                $('#inpTypeOfTrans').addClass('alert-danger');
                $('#inpTypeOfTrans').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbTypeOfTrans').removeClass('lbWarn');
                 $('#inpTypeOfTrans').removeClass('alert-danger');
                 $('#inpTypeOfTrans').attr('placeholder',"Enter question number");
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _TypeOfTrans:$('#inpTypeOfTrans').val()
            };
            $.ajax({
                 url:'insTypeOfTrans',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwTypeOfTrans');
                     }
                    else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#lbTypeOfTrans').addClass('lbWarn');
                        $('#inpTypeOfTrans').addClass('alert-danger');
                        $('#inpTypeOfTrans').val('');
                        $('#inpTypeOfTrans').attr('placeholder',"ALREADY EXIST!");
                    }
                }
            });
        } 
    });
    
    $(document).on('click','#updTOT',function(){

        var chk = 0;
        var vId = $('#inpId').val();
        var vTypeOfTrans = $('#inpUpdTot').val();

        if (vTypeOfTrans == ''){
            chk = 1;
            
            if(vTypeOfTrans == ''){
                $('#lbUpdTot').addClass('lbWarn');
                $('#inpUpdTot').addClass('alert-danger');
                $('#inpUpdTot').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbUpdTot').removeClass('lbWarn');
                 $('#inpUpdTot').removeClass('alert-danger');
                 $('#inpUpdTot').attr('placeholder',"Enter question number");
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _TotId:vId,  
              _TypeOfTrans:vTypeOfTrans
            };
            
            $.ajax({
                 url:'edtTypeOfTrans',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwTypeOfTrans');
                     }
                     else{
                         alert('Err');
                     }
                }
            });
        } 
    });
    
    $(document).on('click','#aRegUM',function(){

        var chk = 0;
        var vUM = $('#inpUM').val();

        if (vUM == ''){
            chk = 1;
            
            if(vUM == ''){
                $('#lbUM').addClass('lbWarn');
                $('#inpUM').addClass('alert-danger');
                $('#inpUM').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbUM').removeClass('lbWarn');
                 $('#inpUM').removeClass('alert-danger');
                 $('#inpUM').attr('placeholder',"Enter question number");
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _UM:vUM
            };
            $.ajax({
                 url:'insUM',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwUM');
                     }
                    else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#lbUM').addClass('lbWarn');
                        $('#inpUM').addClass('alert-danger');
                        $('#inpUM').val('');
                        $('#inpUM').attr('placeholder',"ALREADY EXIST!");
                    }
                }
            });
        } 
    });
    
    $(document).on('click','#updUM',function(){

        var chk = 0;
        var vId = $('#inpId').val();
        var vUM = $('#inpUpdUM').val();

        if (vUM == ''){
            chk = 1;
            
            if(vUM == ''){
                $('#lbUpdUM').addClass('lbWarn');
                $('#inpUpdUM').addClass('alert-danger');
                $('#inpUpdUM').attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
                 $('#lbUpdUM').removeClass('lbWarn');
                 $('#inpUpdUM').removeClass('alert-danger');
                 $('#inpUpdUM').attr('placeholder',"Enter question number");
            }  
        }
        else{
            chk='0';
        }
        
        if (chk == '0'){
            var ajx='';
            ajx={
              _UmId:vId,  
              _UM:vUM
            };
            $.ajax({
                 url:'edtUM',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwUM');
                     }
                }
            });
        } 
    });
    
    $(document).on('click','#aRegMktg',function(){

        var vMktg = $('#inpMktg').val();
        var vGend = $('#inpG').val();
        
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
               $("#" + name).attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
               $("#" + name).attr('placeholder',"Enter Marketing Prof.");
            }
        });
   
        if (flag == '0'){
            var ajx='';
            ajx={
              _Mktg:vMktg,
              _Gend:vGend
            };
            $.ajax({
                 url:'insMktg',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwMktg');
                     }
                    else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#LBinpMktg').addClass('lbWarn');
                        $('#inpMktg').addClass('alert-danger');
                        $('#inpMktg').val('');
                        $('#inpMktg').attr('placeholder',"ALREADY EXIST!");
                    }
                }
            });
        } 
    });
    
    $(document).on('click','#aUpdMktg',function(){
        
        var vMktgId = $('#inpMktgId').val();
        var vMktg = $('#inpUpdMktg').val();
        var vGend = $('#inpUpdG').val();
        
        var flag = 0;
        $('.inpUpd').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
               $("#" + name).attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
               $("#" + name).attr('placeholder',"Enter Marketing Prof.");
            }
        });

        if (flag == '0'){
            var ajx='';
            ajx={
              _MktgId:vMktgId,  
              _Mktg:vMktg,
              _Gend:vGend
            };
            $.ajax({
                 url:'edtMktg',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwMktg');
                    }  
                }
            });
        }    
    });
    
    $(document).on('click','#aRegAdv',function(){

        var vAdv = $('#inpAdv').val();
        var vGend = $('#inpG').val();
        
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
               $("#" + name).attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
               $("#" + name).attr('placeholder',"Enter Service Advisor");
            }
        });
   
        if (flag == '0'){
            var ajx='';
            ajx={
              _Adv:vAdv,
              _Gend:vGend
            };
            $.ajax({
                 url:'insAdv',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwAdv');
                     }
                    else{
                        $('.lbWarn').removeClass('lbWarn');
                        $('.alert-danger').removeClass('alert-danger');
                        $('#LBinpAdv').addClass('lbWarn');
                        $('#inpAdv').addClass('alert-danger');
                        $('#inpAdv').val('');
                        $('#inpAdv').attr('placeholder',"ALREADY EXIST!");
                    }
                }
            });
        } 
    });
    
    $(document).on('click','#aUpdAdv',function(){
        
        var vAdvId = $('#inpAdvId').val();
        var vAdv = $('#inpUpdAdv').val();
        var vGend = $('#inpUpdG').val();
        
        var flag = 0;
        $('.inpUpd').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
               $("#" + name).attr('placeholder',"PLEASE DON'T LEAVE BLANK!");
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
               $("#" + name).attr('placeholder',"Enter Marketing Prof.");
            }
        });

        if (flag == '0'){
            var ajx='';
            ajx={
              _AdvId:vAdvId,  
              _Adv:vAdv,
              _Gend:vGend
            };
            $.ajax({
                 url:'edtAdv',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                     data:JSON.stringify(ajx)
                 },
                 success:function(data){
                    if(data == 'Success'){
                       window.location.replace('shwAdv');
                    }  
                }
            });
        }    
    });
    
});

