/******** INIT APP / SET DEPENDENCIES ********/
var app = angular.module('tricot', ['lokijs']);

/******** CONSTANTE DB CONFIG ********/
// Db config
app.constant(
    'json1',
    {
        "db":"tricot",
        "collection": "symbols" ,
        "documents":
            [
                {
                    "name": "nom du symbole",
                    "location" : "url du symbole",
                    "weight" : "poids du symbole"
                }
            ]
    }
);
// Symbols loading
app.constant(
    'symbols',
    [
        { "s": "assets/symbols/1000.png" },
        { "s": "assets/symbols/1001.png" },
        { "s": "assets/symbols/1002.png" }
    ]
);

/******** ARTICLE DETAIL CONTROLLER ********/
app.controller('MainCtrl', function($scope, Lokiwork, json1, symbols) {

    console.log('Angular is up running !');
    console.log(symbols);
    $scope.symbols = symbols;

    // ** Ajouter des datas dans la collection **
    // Lokiwork.addCollection(json1);
    // ** Ajouter des datas dans la collection **
    // Lokiwork.addDocument(json1.db, json1.collection, { name: "test", location: "location", weight: "toto" });
    // ** Obtenir la le contenu de la collection **
    // console.log(Lokiwork.getCollection(json1.db, json1.collection));

});