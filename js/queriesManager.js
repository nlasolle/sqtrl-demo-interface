var API_PATH = "http://localhost:8080/sqtrl/";
var results;

/**
 * Load a list of rules from a given file
 * @param {*} file the rule file
 */
function loadRuleFile(file){
    "use strict";
    var request = new XMLHttpRequest();
    console.log("file " + file);
    //Retrieve all prefixes for the current RDF database (prefix + URI)
    request.open("POST", API_PATH + "rules-load", true);
    request.setRequestHeader("Content-type", "text/plain");

    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("Rules extracted from the file.");
            listRules();
        } else {
            console.log(`An error occured when extracting rules from the file ${file}`);
        }
    };
    request.send(file);
}

/**
 * Get a list of rules from an application process manager
 */
function listRules(){
    "use strict";
    var request = new XMLHttpRequest();

    //Retrieve all prefixes for the current RDF database (prefix + URI)
    request.open("GET", API_PATH + "rules-list", true);
  
    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("Rules retrieved from application manager.");
            rules = JSON.parse(this.response);
            updateRulesTable();

        } else {
            console.log("An error occured when retrieving rules.");
        }
    };
    request.send();
}

/**
 * Get a list of prefixes from an application process manager
 */
function listPrefixes(){
    "use strict";
    var request = new XMLHttpRequest();

    //Retrieve all prefixes for the current RDF database (prefix + URI)
    request.open("GET", API_PATH + "prefixes-list", true);
  
    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("Prefixes retrieved from application manager.");
            prefixes = JSON.parse(this.response);

        } else {
            console.log("An error occured when retrieving prefixes.");
        }
    };
    request.send();
}

/**
 * Execute and get the results for a given SPARQL query
 */
function getQueryResults(query){
    "use strict";
    var request = new XMLHttpRequest();

    //Retrieve SPARQL query execution results
    request.open("POST", API_PATH + "query", true);
  
    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("SPARQL Query executed.");
            putResultsToTable(JSON.parse(this.response));

        } else {
            console.log("An error occured when executing the SPARQL query.");
        }
    };

    request.send(query);
}

/**
 * Init the transformation process with a given query
 */
function initTransformationProcess(query){
    "use strict";
    var request = new XMLHttpRequest();

    request.open("POST", API_PATH + "init-process", true);
  
    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("SQTRL process initialized.");   

        } else {
            console.log("An error occured when executing the SPARQL query.");
        }
    };

    request.send(query);
}

/**
 * Get the next transformation node (or null if it not exists)
 */
function getNextNode(){
    "use strict";
    var request = new XMLHttpRequest();

    request.open("GET", API_PATH + "next-node", true);
  
    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status == 200) {
            console.log("Next transformation node retrieved");
            console.dir(JSON.parse(this.response));
            addTransformationNode(JSON.parse(this.response));

        } else {
            console.log("An error occured when retrieving the transformation node.");
        }
    };

    request.send();
}