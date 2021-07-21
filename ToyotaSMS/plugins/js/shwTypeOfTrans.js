function tbltypeoftrans(){
    $('#tblTypeOfTrans').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'TypeOfTransRec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'TypeOfTrans'}
        ],
        columnDefs:[ 
            {
                targets: [1],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-warning" id="EditTOT" value="'+full['TypeOfTrans']+'" name="' + full['transId'] + '" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="DelTOT" value="'+full['TypeOfTrans']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tbltypeoftrans();
});
