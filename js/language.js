var langData = {
    "tag": [
        "en",
        "fr"
    ],
    "title": [
      "Flexible querying system",
      "Système de recherche flexible"
    ],
    "noResultMessage": [
        "No results for the generated SPARQL query: only initial query results are displayed.",
        "Aucun résultat pour la requête SPARQL générée : seuls les résultats de la requête initiale sont affichés."
      ],
      "noResultInitialMessage": [
        "No results for the initial SPARQL query: please use flexible search to generate alternative queries.",
        "Aucun résultat pour la requête SPARQL. Vous pouvez essayer d'utiliser le bouton de recherche flexible pour générer des requêtes alternatives."
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
        "Query",
        "Requête"
    ],
    "globalCostLabel": [
        "Global cost",
        "Coût total"
    ],
    "localCostLabel": [
        "Local cost",
        "Coût local"
    ],
    "explanationLabel": [
        "Explanation",
        "Explication"
    ],
    "hideDetails" : [
        "Hide details",
        "Masquer détails"
    ],
    "hideResultsLabel" : [
        "Hide/show results",
        "Masquer/afficher les résultats"
    ],
    "appliedRuleLabel" : [
        "Rule IRI",
        "IRI de la règle"
    ],
    "appliedRuleDescription" : [
        "Rule label",
        "Étiquette de la règle"
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