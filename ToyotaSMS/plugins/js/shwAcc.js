function tblAccounts(){
    $('#tblAcc').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'shwAccRec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'Username'},
            {data:'Name'},
            {data:'Designation'}
        ],
        columnDefs:[ 
            {
                targets: [3],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-success" id="EditPwd" value="'+full['Username']+'" data-toggle="modal" data-target="#PwdModal"><i class="fa fa-shield"></i></button> '+
                           '<button class="btn btn-warning" id="EditAcc" value="'+full['Username']+'" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="DelAcc" value="'+full['Username']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tblAccounts();
});

