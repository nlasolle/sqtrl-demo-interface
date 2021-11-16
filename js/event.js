

$(document).ready(function () {
    var currentElement = -1;
    var nodes = [];

    $("#backwardButton").prop('disabled', true);
    $("#forwardButton").prop('disabled', true);
    
    var k = 1;
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#exportButton').on('click', function () {
        exportSelectedResults();
    });


    $('#executeButton').on('click', function () {
        console.dir(initialQueryEditor.getValue());
        getQueryResults(initialQueryEditor.getValue());
    });

    $('#moreButton').on('click', function () {
        
        if(k == 1){
            addChildToNode("Q", "Q1");
            let element = {};
            element.parent = "Q";
            element.child = "Q1"
            nodes.push(element);
            currentElement++;
            k++;
        }
        else if(k == 3){
            addChildToNode("Q", "Q2");
            let element = {};
            element.parent = "Q";
            element.child = "Q2"
            nodes.push(element);
            currentElement++;
            k++;
        } else {
            addChildToNode("Q1", "Q11");
            let element = {};
            element.parent = "Q1";
            element.child = "Q11"
            nodes.push(element);
            currentElement++;
            k++;
        }

        $("#backwardButton").prop('disabled', false);    
    });

    $('#backwardButton').on('click', function () {
        console.log("nodes " + nodes);
        console.log("current  " + currentElement);
        console.log("target  " + nodes[currentElement].child);

       $("#" + nodes[currentElement].child).remove();
       //We remove the level list only if we removed the last child (<ul>), to avoid a black line not related to any node
       if($('#' + nodes[currentElement].parent + "List").children().length <= 0) {
        $('#' + nodes[currentElement].parent + "List").remove();
       }
       currentElement--; 

       $('#forwardButton').prop('disabled', false);

       if(currentElement == -1 ){
        $('#backwardButton').prop('disabled', true);
       }
    });

    $('#forwardButton').on('click', function () {
        currentElement++;
        addChildToNode(nodes[currentElement].parent, nodes[currentElement].child);

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