var langData = {
    "tag": [
        "en",
        "fr"
    ],
    "title": [
      "Flexible querying system",
      "Système de recherche flexible"
    ],
    "sparqlQuery" : [
        "Initial SPARQL query",
        "Requête SPARQL initiale"
    ],
    "generatedSparqlQuery" : [
        "Selected SPARQL query",
        "Requête SPARQL sélectionnée"
    ],
    "generateButton" : [
        "Generate SPARQL query",
        "Générer la requête SPARQL"
    ],
    "sidebarHeaderLabel" : [
        "Query generation details",
        "Détails pour la requête générée"
    ],
    "executeButton" : [
        "Execute SPARQL query",
        "Exécuter la requête"
    ],
    "moreButton" : [
        "Get More",
        "Plus de résultats"
    ],
    "exportButton" : [
        "Export to CSV",
        "Export CSV"
    ],
    "executeButton" : [
        "Execute SPARQL query",
        "Exécuter la requête"
    ],
    "executeGeneratedQueryButton" : [
        "Execute SPARQL query",
        "Exécuter la requête"
    ],
    "treeTitle" : [
        "Search history",
        "Historique de recherche"
    ],
    "formBasedTab" : [
        "SPARQL Query generation",
        "Génération de requêtes SPARQL"
    ],
    "sparqlTab" : [
        "Flexible querying",
        "Recherche flexible"
    ],
    "configurationTab" : [
        "Configuration",
        "Configuration"
    ],
    "name": [
        "Name",
        "Nom"
    ],
    "globalCostLabel": [
        "Global cost",
        "Coût total"
    ],
    "localCostLabel": [
        "Local cost",
        "Coût local"
    ],
    "hideDetails" : [
        "Hide details",
        "Masquer détails"
    ],
    "appliedRuleLabel" : [
        "Applied rule",
        "Règle appliquée"
    ],
    "queryResults" : [
        "Results",
        "Résultats"
    ]
  };

/**
 * Set the language associated with the user interface
 * @param {*} id the param of the selected laguage
 */
function setLanguage(id){

    for([key, value] of Object.entries(langData)){
        $("#" + key).html(value[id]);

        $('.' + key).each(function() {
            $(this).html(value[id]);
         });
    }
}