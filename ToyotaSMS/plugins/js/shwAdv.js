function tblServiceAdv(){
    $('#tblAdv').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'shwAdvRec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'ServiceAdvisor'},
            {data:'Gender'}
        ],
        columnDefs:[ 
            {
                targets: [2],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-warning" id="EditAdv" value="'+full['ServiceAdvisor']+'" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="DelAdv" value="'+full['ServiceAdvisor']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tblServiceAdv();
});