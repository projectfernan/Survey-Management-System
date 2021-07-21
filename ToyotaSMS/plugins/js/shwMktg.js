function tblMktgProf(){
    $('#tblMktg').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'shwMktgRec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'MktgProf'},
            {data:'Gender'}
        ],
        columnDefs:[ 
            {
                targets: [2],
                searchable: false,
                "render": function(data, type, full, meta){
                    return '<button class="btn btn-warning" id="EditMktg" value="'+full['MktgProf']+'" data-toggle="modal" data-target="#Edit"><i class="fa fa-edit"></i></button> '+
                           '<button class="btn btn-danger" id="DelMktg" value="'+full['MktgProf']+'" data-toggle="modal" data-target="#ModalDelete"><i class="fa fa-trash"></i></button>';
                }
            }
       ]
    });
}

$(function(){
    tblMktgProf();
});