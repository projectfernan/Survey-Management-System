function tblcustSalSur(){
    $('#custSalSur').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'readCustSalSur',
            dataSrc: 'data' 
        },
        columns:[
            {data:'SurveyDate'},
            {data:'Customer'},
            {data:'ContactNo'},
            {data:'PlateNo'}
        ],
        columnDefs:[ 
            {
                targets: [4],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<div class="text-center"><button class="btn btn-primary salSur" id="btnVwe" Name="'+full['PlateNo']+'" value="'+full['SurveyDate']+'" data-toggle="modal" data-target="#vweSalSur"><i class="fa fa-search"></i> View</button></div>';
                }
            }
       ]
    });
}

function tblcustSerSur(){
    $('#custSerSur').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'readCustSerSur',
            dataSrc: 'data' 
        },
        columns:[
            {data:'SurveyDate'},
            {data:'Customer'},
            {data:'ContactNo'},
            {data:'PlateNo'}
        ],
        columnDefs:[ 
            {
                targets: [4],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<div class="text-center"><button class="btn btn-primary salSur" id="btnVweSer" Name="'+full['PlateNo']+'" value="'+full['SurveyDate']+'" data-toggle="modal" data-target="#vweSerSur"><i class="fa fa-search"></i> View</button></div>';
                }
            }
       ]
    });
}

$(function(){
    tblcustSalSur();
    tblcustSerSur();
});


