
function LoadRestri(){
    $.ajax({
        url:'getRestri',
        type:'POST',
        success:function(data){
            var _data = jQuery.parseJSON(data);
            var _get = _data[0];

            var appRestri = '';

            if (_get['SurveyRec'] == 1){
                appRestri += '<li class="nav-item" id="SurRec" data-toggle="tooltip" data-placement="right" title="Survey Records">';
                appRestri += '<a class="nav-link" Id="aMain" href="#">';
                appRestri += '<i class="fa fa-fw fa-dashboard"></i>';
                appRestri += '<span class="nav-link-text">Survey Records</span>';
                appRestri += '</a>';
                appRestri += '</li>';
            }
            if (_get['CustRec'] == 1){
                appRestri += '<li class="nav-item" id="CustRec" data-toggle="tooltip" data-placement="right" title="Customer Records">';
                appRestri += '<a class="nav-link" Id="aCustRec" href="#">';
                appRestri += '<i class="fa fa-fw fa-users"></i>';
                appRestri += '<span class="nav-link-text">Customer Records</span>';
                appRestri += '</a>';
                appRestri += '</li>';
            }
            if (_get['Questions'] == 1){
                appRestri += '<li class="nav-item" id="Ques" data-toggle="tooltip" data-placement="right" title="Questionnaires">';
                appRestri += '<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseQuest" data-parent="#exampleAccordion">';
                appRestri += '<i class="fa fa-fw fa-question-circle"></i>';
                appRestri += '<span class="nav-link-text">Questionnaires</span>';
                appRestri += '</a>';
                appRestri += '<ul class="sidenav-second-level collapse" id="collapseQuest">';
                appRestri += '<li>';
                appRestri += '<a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseQSales">Sales Survey</a>';
                appRestri += '<ul class="sidenav-third-level collapse" id="collapseQSales">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aNewSalesQ">New Question</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aSalesQ">Question List</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseQService">Service Survey</a>';
                appRestri += '<ul class="sidenav-third-level collapse" id="collapseQService">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aNewServiceQ">New Question</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aServiceQ">Question List</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
            }
            if (_get['CustRep'] == 1){
                appRestri += '<li class="nav-item" id="CustRep" data-toggle="tooltip" data-placement="right" title="Customer Representatives">';
                appRestri += '<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseRep" data-parent="#exampleAccordion">';
                appRestri += '<i class="fa fa-fw fa-user"></i>';
                appRestri += '<span class="nav-link-text">Customer Representatives</span>';
                appRestri += '</a>';
                appRestri += '<ul class="sidenav-second-level collapse" id="collapseRep">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aMktg">Marketing Prof.</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aAdv">Service Advisor</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
            }
            if (_get['TypeOfTrans'] == 1){
                appRestri += '<li class="nav-item" id="Tot" data-toggle="tooltip" data-placement="right" title="Type of Transaction">';
                appRestri += '<a class="nav-link" href="#" id="aTypeOfTrans">';
                appRestri += '<i class="fa fa-fw fa-exchange"></i>';
                appRestri += '<span class="nav-link-text">Type of Transactions</span>';
                appRestri += '</a>';
                appRestri += '</li>';
            }
            if (_get['VehUnit'] == 1){
                appRestri += '<li class="nav-item" id="VehUnit" data-toggle="tooltip" data-placement="right" title="Vehicle Unit Model">';
                appRestri += '<a class="nav-link" href="#" id="aUnitModel">';
                appRestri += '<i class="fa fa-fw fa-car"></i>';
                appRestri += '<span class="nav-link-text">Vehicle Unit Model</span>';
                appRestri += '</a>';
                appRestri += '</li>';
            }
            if (_get['Reports'] == 1){
                appRestri += '<li class="nav-item" id="Reports" data-toggle="tooltip" data-placement="right" title="Reports">';
                appRestri += '<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseReports" data-parent="#exampleAccordion">';
                appRestri += '<i class="fa fa-fw fa-newspaper-o"></i>';
                appRestri += '<span class="nav-link-text">Reports</span>';
                appRestri += '</a>';
                appRestri += '<ul class="sidenav-second-level collapse" id="collapseReports">';
                appRestri += '<li>';
                appRestri += '<a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseSales">Sales Survey</a>';
                appRestri += '<ul class="sidenav-third-level collapse" id="collapseSales">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aSalesDetaRep">Detailed Report</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aSalesBarRep">Bar Graph Report</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseService">Service Survey</a>';
                appRestri += '<ul class="sidenav-third-level collapse" id="collapseService">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aServiceDetaRep">Detailed Report</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aServiceBarRep">Bar Graph Report</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
            }
            if (_get['Settings'] == 1){
                appRestri += '<li class="nav-item" id="Settings" data-toggle="tooltip" data-placement="right" title="System Settings">';
                appRestri += '<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">';
                appRestri += '<i class="fa fa-fw fa-wrench"></i>';
                appRestri += '<span class="nav-link-text">System Settings</span>';
                appRestri += '</a>';
                appRestri += '<ul class="sidenav-second-level collapse" id="collapseComponents">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aDesig">Account Designation</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<li>';
                appRestri += '<a class="nav-link-collapse collapsed" data-toggle="collapse" href="#AccSettings">Account Settings</a>';
                appRestri += '<ul class="sidenav-third-level collapse" id="AccSettings">';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aNewAcc">New System Account</a>';
                appRestri += '</li>';
                appRestri += '<li>';
                appRestri += '<a href="#" id="aAccRec">System Accounts</a>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
                appRestri += '</ul>';
                appRestri += '</li>';
            }
            
            $('#exampleAccordion').empty();
            $('#exampleAccordion').append(appRestri);
        }
    });
}

$(function(){
    $('.MainHome').hide();
    LoadRestri();
});