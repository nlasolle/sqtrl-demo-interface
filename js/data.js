var processHistory = {
    "applications": [
        {
            "rule" : "rule/generic/0",
            "childs" : [
                {
                    "rule" : "rule/generic/1",
                    "childs" : [
                        {
                            "rule" : "rule/generic/11"
                        },
                        {
                            "rule" : "rule/generic/12"
                        }
                    ]
                }
             ]     
        }
    ]
}


/**
 * 
 * @param {*} node the id of the node (ex : Q1)
 * @param {*} child the id of the child node to add (ex : Q12)
 */
function addChildToNode(node, child){
   if ($("#" + node + "List").length == 0) {
       console.log("Zero length!");
        $("#" + node).append("<ul id='" + node + "List'>\n</ul>");
   }

   $("#" + node + "List").append("<li id ='" + child + "'><a id='"+ child + "Link'>" + child + "</a>\n</li>");

   $('#' + child + "Link").on('click', function () {
    updateSidebarContent(child);
  });

}

function initTree(){
   var topNode = "<ul>\n"
    + "<li id='Q'>\n"
    + "<a id ='QLink' 'po'>Q</a>\n"
    +"</li> "
    +"</ul>";
    

    $("#historyTree").append(topNode);

    $('#QLink').on('click', function () {
        updateSidebarContent("Q");
      });
    
}

/**
 * Update the content and render the sidebar (if no visible) 
 * @param {*} node the query node which has been clicked on.
 */
function updateSidebarContent(node){
    $('#sidebar').toggleClass('active', false);

    $('#nameValue').html(node);
}

function putResultsToTable(results){
    

    $('#resultsTable').DataTable().clear().destroy();
    let row = [];
    var columns = [];

    $("#resultsTable > tbody").empty();
    $("#resultsTable > thead").empty();

    //We first set the new columns headers
    if(results.length > 0){
        $.each( results[0], function(i, n){
            let column = {}
            column.title = i;
            columns.push(column);
        });

    }

    //resultsTable.columns = columns;
    var data = [];
    for (i =0 ; i < results.length ; i++){
        row = [];
        $.each( results[i], function(i, n){
            row.push(n);
         });
         data.push(row);
    }

    resultsTable = $('#resultsTable').DataTable( {
        pagingType: "simple", // "simple" option for 'Previous' and 'Next' buttons only
        pageLength : 5,
        colums : columns,
        aoColumns: columns,
        data : data,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
        bDestroy: true,
        bFilter: true,
        select: {
            style: 'multi',
            blurable: true
        },
        empty:true
    } );

    resultsTable.draw();

}

function exportSelectedResults(selected){
    let results;
    if(selected){
        results = resultsTable.rows({ selected: true });
    } else {
        results = resultsTable.rows();
    }
    console.dir(results);
}