

$(document).ready(function () {

    var currentInitialQuery = ""; 

    $("#backwardButton").prop('disabled', true);
    $("#forwardButton").prop('disabled', true);

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#exportButton').on('click', function () {
        exportSelectedResults();
    });


    $('#executeButton').on('click', function () {
        if(!initialQueryEditor.getValue() == currentInitialQuery){
            currentInitialQuery = initialQueryEditor.getValue();
            initTransformationProcess(currentInitialQuery);
            getQueryResults(currentInitialQuery);
        } 
    });

    $('#moreButton').on('click', function () {
        getNextNode();
        $("#backwardButton").prop('disabled', false);    
    });

    $('#backwardButton').on('click', function () {
    
       $("#" + nodes[currentElement].id).remove();
       //We remove the level list only if we removed the last child (<ul>), to avoid a black line not related to any node
       if($('#' + nodes[currentElement].parentId + "List").children().length <= 0) {
        $('#' + nodes[currentElement].parentId + "List").remove();
       }
       currentElement--; 

       $('#forwardButton').prop('disabled', false);

       if(currentElement == -1 ){
        $('#backwardButton').prop('disabled', true);
       }
    });

    $('#forwardButton').on('click', function () {
        currentElement++;
        addChildToNode(nodes[currentElement].parentId, nodes[currentElement].id);

        if(currentElement == nodes.length -1 ){
            $('#forwardButton').prop('disabled', true);
        }

        $("#backwardButton").prop('disabled', false);
     });

    $('#languageSelect').change(function() {
        let value = $("option:selected", this).val();
        lang = langData.tag[value];
        setLanguage(value);
  });



    //Results table initialization (variable columns)

    resultsTable = $('#resultsTable').DataTable( {
        pagingType: "simple", // "simple" option for 'Previous' and 'Next' buttons only
        pageLength : 5,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
        bFilter: true,
        bDestroy: true,
        empty: true,
        select: {
            style: 'multi',
            blurable: true
        },
        autoWidth: true
    } );

   $("#resultsTable > tbody").empty();
    resultsTable.clear();

    resultsTable.draw();
    setLanguage(0);
    initTree();
});