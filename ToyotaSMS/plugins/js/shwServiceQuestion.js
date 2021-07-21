function tblServiceQuestion(){
    $('#ServiceSurQ').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'vweServiceQ',
            dataSrc: 'data' 
        },
        columns:[
            {data:'No'},
            {data:'SurveyQuestion'},
            {data:'AnsType'},
            {data:'Group'}
        ],
        columnDefs:[ 
            {
                targets: [4],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-warning" id="btnSerQEdt" value="'+full['No']+'" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="btnSerQDel" value="'+full['No']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tblServiceQuestion();
});


