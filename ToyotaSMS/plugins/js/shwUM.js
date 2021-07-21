function tblUnitModel(){
    $('#tblUM').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'shwUMrec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'UnitModel'}
        ],
        columnDefs:[ 
            {
                targets: [1],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-warning" id="EditUM" value="'+full['UnitModel']+'" name="' + full['Id'] + '" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="DelUM" value="'+full['UnitModel']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tblUnitModel();
});


