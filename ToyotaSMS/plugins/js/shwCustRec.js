function ShowTblCustRec(){
    $('#tblCustRec').DataTable({
        destroy:true,
        autoWidth: false,
        serverSide: true,
        responsive: true,
        bFilter: true,
        lengthMenu:[[5,10,15,-1],[5,10,15,'All']],
        ajax:{
            url: 'shwTblCustRec',
            dataSrc: 'data' 
        },
        columns:[
            {data:'Name'},
            {data:'NickName'},
            {data:'Bday'},
            {data:'Age'},
            {data:'MaritalStatus'},
            {data:'ContactNo'},
            {data:'Email'},
            {data:'Address'},
            {data:'CompName'},
            {data:'CompAddress'},
            {data:'Occupation'},
            {data:'Industry'},
            {data:'PlateNo'},
            {data:'UnitModel'},
            {data:'VehUsage'},
            {data:'Sports'},
            {data:'Interest'}
        ]
    });
}

$(function(){
    ShowTblCustRec();
});
