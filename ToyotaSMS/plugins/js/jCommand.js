
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
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

$(function(){
    
    $('.vLogMsg').hide();
    
    $(document).on('click','#aSerSurStatRep',function(){
       window.location.replace('SerSurChart');
    });
    
    $(document).on('click','#aSalesQ',function(){
       window.location.replace('ShowSalesQ');
    });
    
    $(document).on('click','#aNewSalesQ',function(){
       window.location.replace('ShowNewSalesQ');
    });
    
    $(document).on('click','#aNewServiceQ',function(){
       window.location.replace('ShowNewServiceQ');
    });
   
   $(document).on('click','#aMain',function(){
       window.location.replace('Home');
    });
    
    $(document).on('click','#aCustRec',function(){
      window.location.replace('ShowCustRec');
    });
    
    $(document).on('click','#aServiceQ',function(){
       window.location.replace('ShowServiceQ');
    });
   
    $(document).on('click','#aSalesDetaRep',function(){
       window.location.replace('shwSalesDetaRep');
    });
    
    $(document).on('click','#aSalesBarRep',function(){
       window.location.replace('shwSalesBarRep');
    });
    
    $(document).on('click','#aServiceDetaRep',function(){
       window.location.replace('shwServiceDetaRep');
    });
    
    $(document).on('click','#aServiceBarRep',function(){
       window.location.replace('shwServiceBarRep');
    });
    
    $(document).on('click','#aTypeOfTrans',function(){
       window.location.replace('shwTypeOfTrans');
    });
    
    $(document).on('click','#aUnitModel',function(){
       window.location.replace('shwUM');
    });
    
    $(document).on('click','#aMktg',function(){
       window.location.replace('shwMktg');
    });
    
    $(document).on('click','#aAdv',function(){
       window.location.replace('shwAdv');
    });
    
    $(document).on('click','#aDesig',function(){
       window.location.replace('shwDesig');
    });

    $(document).on('click','#aNewAcc',function(){
       window.location.replace('shwNewAcc');
    });
    
    $(document).on('click','#aAccRec',function(){
       window.location.replace('shwAcc');
    });
    
    $("#inpQNo").ForceNumericOnly();
    
     $('#inpPwd').keypress(function(e){
        if(e.which == 13) {
            var _UID = '';
            var _PWD = '';

            _UID = $('#inpUid').val();
            _PWD = $('#inpPwd').val();
            var ajx = '';

            ajx = {
                _UID,
                _PWD
            };

            $.ajax({
                url:'Login',
                type:'post',
                data:{
                    data:window.btoa(JSON.stringify(ajx))
                },
                success:function(data){
                    if (data == "Granted"){
                        window.location.replace('Home');
                    }
                    else{
                         $('.vLogMsg').show();
                         $('#inpUid').val('');
                         $('#inpPwd').val('');
                         $('#inpUid').focus();
                    }
                }
            });
        }
     });    
    
    $(document).on('click','#aLogin',function(){
        var _UID = '';
        var _PWD = '';
        
        _UID = $('#inpUid').val();
        _PWD = $('#inpPwd').val();
        var ajx = '';
        
        ajx = {
            _UID,
            _PWD
        };
        
        $.ajax({
            url:'Login',
            type:'post',
            data:{
                data:window.btoa(JSON.stringify(ajx))
            },
            success:function(data){
                if (data == "Granted"){
                    window.location.replace('Home');
                }
                else{
                     $('.vLogMsg').show();
                     $('#inpUid').val('');
                     $('#inpPwd').val('');
                     $('#inpUid').focus();
                }
            }
        });

    });
    
    $(document).on('click','#aLogout',function(){
       window.location.replace('SystemLogin');
    });
   
});


