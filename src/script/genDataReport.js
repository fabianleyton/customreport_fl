function ShowDataTable(objTB, dataObj, params){
    
    if(params.columns!=undefined && params.columns.legth > 0){
        var columns = [];
        $.each(function(index,value){
            columns.push({title: value});
        });
    }else{
        alert("params.columns is not defined")
    }
    
    $('#testTable').DataTable({
        data: '../ajax/data/arrays.txt'
    });
}