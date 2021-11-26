function downloadCSV(data) {  
    var data, link;
    var csv = "";
    var columnSeparator = ','
        lineDelimiter = '\n';
    var json = Object.values(data);
    if (csv == null) return;
    var keys = (json[0] && Object.keys(json[0])) || [];

    $("#resultsTable thead tr th").each(function(){
        csv+= this.innerHTML + columnSeparator;
    
    });
    csv+= lineDelimiter;
    let i = 0;

    for (var line of json) {
        console.log("SIZE " + data.length);
        console.log("Line " + line);

        if(i >= data.length){
            break;
        }
        i++;
        csv += keys.map(key => line[key]).join(columnSeparator) + lineDelimiter;
    }

    var title = "query_results_" + getFormattedDate() + ".csv";

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }

    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', title);
    link.click();
}


function getFormattedDate(){
    const now = new Date(Date.now());
    
    var month = now.getMonth().toString();
    if (month.length == 1) {
        month = "0" + month;
    }

    var day = now.getDay().toString();

    if (day.length == 1) {
        day = "0" + day;
    }

    var hours = now.getHours().toString();
    if (hours.length == 1) {
        hours = "0" + hours;
    }

    var minutes = now.getMinutes().toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }

    return  now.getFullYear() + month  + day + "_" + hours + minutes;
}