/******** REQUIRE NODE JS MODULES ********/
var fs = require('fs');
const {dialog} = require('electron').remote;

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
        { "s": "assets/symbols/grey.png", "weight": "1" },
        { "s": "assets/symbols/1000.png", "weight": "1" },
        { "s": "assets/symbols/1001.png", "weight": "1" },
        { "s": "assets/symbols/1002.png", "weight": "1" },
        { "s": "assets/symbols/1003.png", "weight": "1" },
        { "s": "assets/symbols/1004.png", "weight": "1" },
        { "s": "assets/symbols/1005.png", "weight": "1" },
        { "s": "assets/symbols/1006.png", "weight": "1" },
        { "s": "assets/symbols/1007.png", "weight": "1" },
        { "s": "assets/symbols/1008.png", "weight": "1" },
        { "s": "assets/symbols/1009.png", "weight": "1" },
        { "s": "assets/symbols/1010.png", "weight": "1" },
        { "s": "assets/symbols/1011.png", "weight": "1" },
        { "s": "assets/symbols/1012.png", "weight": "1" },
        { "s": "assets/symbols/1013.png", "weight": "1" },
        { "s": "assets/symbols/1014.png", "weight": "1" },
        { "s": "assets/symbols/1015.png", "weight": "1" },
        { "s": "assets/symbols/1016.png", "weight": "1" },
        { "s": "assets/symbols/1017.png", "weight": "1" },
        { "s": "assets/symbols/1018.png", "weight": "1" },
        { "s": "assets/symbols/1019.png", "weight": "1" },
        { "s": "assets/symbols/1020.png", "weight": "1" },
        { "s": "assets/symbols/1021.png", "weight": "1" },
        { "s": "assets/symbols/1022.png", "weight": "1" },
        { "s": "assets/symbols/1023.png", "weight": "1" },
        { "s": "assets/symbols/1024.png", "weight": "1" },
        { "s": "assets/symbols/1025.png", "weight": "1" },
        { "s": "assets/symbols/1026.png", "weight": "1" },
        { "s": "assets/symbols/1027.png", "weight": "1" },
        { "s": "assets/symbols/1028.png", "weight": "1" },
        { "s": "assets/symbols/1029.png", "weight": "1" },
        { "s": "assets/symbols/1030.png", "weight": "1" },
        { "s": "assets/symbols/1031.png", "weight": "1" },
        { "s": "assets/symbols/1032.png", "weight": "1" },
        { "s": "assets/symbols/1033.png", "weight": "1" },
        { "s": "assets/symbols/1034.png", "weight": "1" },
        { "s": "assets/symbols/1035.png", "weight": "1" },
        { "s": "assets/symbols/1035-2.png", "weight": "1" },
        { "s": "assets/symbols/1036.png", "weight": "1" },
        { "s": "assets/symbols/1037.png", "weight": "1" },
        { "s": "assets/symbols/1038.png", "weight": "1" },
        { "s": "assets/symbols/1039.png", "weight": "1" },
        { "s": "assets/symbols/1040.png", "weight": "1" },
        { "s": "assets/symbols/1041.png", "weight": "1" },
        { "s": "assets/symbols/1042.png", "weight": "1" },
        { "s": "assets/symbols/1043.png", "weight": "1" },
        { "s": "assets/symbols/1044.png", "weight": "1" },
        { "s": "assets/symbols/1045.png", "weight": "1" },
        { "s": "assets/symbols/1046.png", "weight": "1" },
        { "s": "assets/symbols/1047.png", "weight": "1" },
        { "s": "assets/symbols/1048.png", "weight": "1" },
        { "s": "assets/symbols/1049.png", "weight": "1" },
        { "s": "assets/symbols/1050.png", "weight": "1" },
        { "s": "assets/symbols/1051.png", "weight": "1" },
        { "s": "assets/symbols/1052.png", "weight": "1" },
        { "s": "assets/symbols/1054.png", "weight": "1" },
        { "s": "assets/symbols/1055.png", "weight": "1" },
        { "s": "assets/symbols/1999.png", "weight": "2" },
        { "s": "assets/symbols/2000.png", "weight": "2" },
        { "s": "assets/symbols/2001.png", "weight": "2" },
        { "s": "assets/symbols/2002.png", "weight": "2" },
        { "s": "assets/symbols/2003.png", "weight": "2" },
        { "s": "assets/symbols/2004.png", "weight": "2" },
        { "s": "assets/symbols/2005.png", "weight": "2" },
        { "s": "assets/symbols/2006.png", "weight": "2" },
        { "s": "assets/symbols/2007.png", "weight": "2" },
        { "s": "assets/symbols/2008.png", "weight": "2" },
        { "s": "assets/symbols/2009.png", "weight": "2" },
        { "s": "assets/symbols/2011.png", "weight": "2" },
        { "s": "assets/symbols/2013.png", "weight": "2" },
        { "s": "assets/symbols/2014.png", "weight": "2" },
        { "s": "assets/symbols/2015.png", "weight": "2" },
        { "s": "assets/symbols/2016.png", "weight": "2" },
        { "s": "assets/symbols/2017.png", "weight": "2" },
        { "s": "assets/symbols/2018.png", "weight": "2" },
        { "s": "assets/symbols/2019.png", "weight": "2" },
        { "s": "assets/symbols/3000.png", "weight": "3" },
        { "s": "assets/symbols/3001.png", "weight": "3" },
        { "s": "assets/symbols/3002.png", "weight": "3" },
        { "s": "assets/symbols/3003.png", "weight": "3" },
        { "s": "assets/symbols/3004.png", "weight": "3" },
        { "s": "assets/symbols/3005.png", "weight": "3" },
        { "s": "assets/symbols/3006.png", "weight": "3" },
        { "s": "assets/symbols/3007.png", "weight": "3" },
        { "s": "assets/symbols/3008.png", "weight": "3" },
        { "s": "assets/symbols/3009.png", "weight": "3" },
        { "s": "assets/symbols/3010.png", "weight": "3" },
        { "s": "assets/symbols/3011.png", "weight": "3" },
        { "s": "assets/symbols/3012.png", "weight": "3" },
        { "s": "assets/symbols/3013.png", "weight": "3" },
        { "s": "assets/symbols/3014.png", "weight": "3" },
        { "s": "assets/symbols/3015.png", "weight": "3" },
        { "s": "assets/symbols/3016.png", "weight": "3" },
        { "s": "assets/symbols/3017.png", "weight": "3" },
        { "s": "assets/symbols/3018.png", "weight": "3" },
        { "s": "assets/symbols/3019.png", "weight": "3" },
        { "s": "assets/symbols/3020.png", "weight": "3" },
        { "s": "assets/symbols/3021.png", "weight": "3" },
        { "s": "assets/symbols/4000.png", "weight": "4" },
        { "s": "assets/symbols/4001.png", "weight": "4" },
        { "s": "assets/symbols/4002.png", "weight": "4" },
        { "s": "assets/symbols/4003.png", "weight": "4" },
        { "s": "assets/symbols/4004.png", "weight": "4" },
        { "s": "assets/symbols/4005.png", "weight": "4" },
        { "s": "assets/symbols/4008.png", "weight": "4" },
        { "s": "assets/symbols/4009.png", "weight": "4" },
        { "s": "assets/symbols/4010.png", "weight": "4" },
        { "s": "assets/symbols/4011.png", "weight": "4" },
        { "s": "assets/symbols/4012.png", "weight": "4" },
        { "s": "assets/symbols/4013.png", "weight": "4" },
        { "s": "assets/symbols/4014.png", "weight": "4" },
        { "s": "assets/symbols/4015.png", "weight": "4" },
        { "s": "assets/symbols/4018.png", "weight": "4" },
        { "s": "assets/symbols/4019.png", "weight": "4" },
        { "s": "assets/symbols/4025.png", "weight": "4" },
        { "s": "assets/symbols/4026.png", "weight": "4" },
        { "s": "assets/symbols/5001.png", "weight": "5" },
        { "s": "assets/symbols/5002.png", "weight": "5" },
        { "s": "assets/symbols/5003.png", "weight": "5" },
        { "s": "assets/symbols/5004.png", "weight": "5" },
        { "s": "assets/symbols/5005.png", "weight": "5" },
        { "s": "assets/symbols/5006.png", "weight": "5" },
        { "s": "assets/symbols/5007.png", "weight": "5" },
        { "s": "assets/symbols/5008.png", "weight": "5" },
        { "s": "assets/symbols/5009.png", "weight": "5" },
        { "s": "assets/symbols/5010.png", "weight": "5" },
        { "s": "assets/symbols/5011.png", "weight": "5" },
        { "s": "assets/symbols/5012.png", "weight": "5" },
        { "s": "assets/symbols/5013.png", "weight": "5" },
        { "s": "assets/symbols/6001.png", "weight": "6" },
        { "s": "assets/symbols/6002.png", "weight": "6" },
        { "s": "assets/symbols/6003.png", "weight": "6" },
        { "s": "assets/symbols/6004.png", "weight": "6" },
        { "s": "assets/symbols/6005.png", "weight": "6" },
        { "s": "assets/symbols/6006.png", "weight": "6" },
        { "s": "assets/symbols/6011.png", "weight": "6" },
        { "s": "assets/symbols/6012.png", "weight": "6" },
        { "s": "assets/symbols/6014.png", "weight": "6" },
        { "s": "assets/symbols/6015.png", "weight": "6" },
        { "s": "assets/symbols/7001.png", "weight": "7" },
        { "s": "assets/symbols/7002.png", "weight": "7" },
        { "s": "assets/symbols/7003.png", "weight": "7" },
        { "s": "assets/symbols/7004.png", "weight": "7" },
        { "s": "assets/symbols/7005.png", "weight": "7" },
        { "s": "assets/symbols/8001.png", "weight": "8" },
        { "s": "assets/symbols/8002.png", "weight": "8" },
        { "s": "assets/symbols/8003.png", "weight": "8" },
        { "s": "assets/symbols/8004.png", "weight": "8" },
        { "s": "assets/symbols/8005.png", "weight": "8" },
        { "s": "assets/symbols/8006.png", "weight": "8" },
        { "s": "assets/symbols/8007.png", "weight": "8" },
        { "s": "assets/symbols/9001.png", "weight": "9" },
        { "s": "assets/symbols/9002.png", "weight": "9" },
        { "s": "assets/symbols/9003.png", "weight": "9" },
        { "s": "assets/symbols/9004.png", "weight": "9" },
        { "s": "assets/symbols/9005.png", "weight": "9" },
        { "s": "assets/symbols/9006.png", "weight": "9" },
        { "s": "assets/symbols/9007.png", "weight": "9" },
        { "s": "assets/symbols/9008.png", "weight": "9" },
        { "s": "assets/symbols/10001.png", "weight": "10" },
        { "s": "assets/symbols/10002.png", "weight": "10" },
        { "s": "assets/symbols/12001.png", "weight": "12" },
        { "s": "assets/symbols/12002.png", "weight": "12" }
    ]
);

/******** MAIN CTRL CONTROLLER ********/
app.controller('MainCtrl', function($scope, Lokiwork, json1, symbols) {

    $scope.symbols = symbols;
    $scope.boxes = [];
    var erase = 0;
    var selectedSymbol = null;

    $scope.newPlan = function() {
        jQuery('.form-container').fadeIn( "slow", function() {
            jQuery('.toolbox').removeClass('active');
        });
    };

    $scope.selectSymbol = function($e) {
        jQuery('.symbol-container .symbols > img').removeClass("enabled");
        // desactive le eraser
        if(erase) {
            erase = ! erase;
            jQuery("#eraserBtn").toggleClass("enabled");
        }
        selectedSymbol = $e.currentTarget;
        selectedSymbol.classList.toggle("enabled");
    }

    $scope.eraserMode = function($e) {
        var elt = $e.currentTarget;
        // Desactive selection image
        jQuery('.symbol-container .symbols > img').removeClass("enabled");
        erase = ! erase;
        elt.classList.toggle("enabled");
    }

    $scope.saveFile = function($e) {
        var saveData = '{ "dimensions": { "hauteur": ' + $scope.hauteur + ', "longueur": ' + $scope.longueur + ' }, "datas": ' + angular.toJson($scope.boxes) + '}';
        dialog.showSaveDialog(function (fileName) {
            if (fileName === undefined) return;
            try {
                fs.writeFileSync(fileName + '.knit', saveData, 'utf-8');
                console.log('Saved settings!');
            } catch (err) {
                throw err;
            }
        });
    }

    $scope.boxClick = function($e, $i) {
        var elt = $e.currentTarget;

        if(selectedSymbol && ! erase) {
            $scope.boxes[$i].background = "url('" + selectedSymbol.src + "')";
            $scope.boxes[$i].weight = selectedSymbol.getAttribute("weight");
            if(selectedSymbol.getAttribute("weight") > 1){
                var nb = selectedSymbol.getAttribute("weight");
                for (var i = (+$i + 1); i < (+$i + +nb); i++) {
                    $scope.boxes[i].display = 'none';
                }
                $scope.boxes[$i].width = nb*30 + "px";
            }
        }
        // If erase mode enabled
        if(erase) {
            $scope.boxes[$i].background = "none";
            if(elt.getAttribute("weight") > 1){
                var nb = elt.getAttribute("weight") - 1;
                $scope.boxes[$i].weight = selectedSymbol.getAttribute("weight");
                for (var i = (+$i + 1); i < (+$i + +nb + 1); i++) {
                    $scope.boxes[i].display = 'block';
                }
                $scope.boxes[$i].width = "30px";
            }
        }
    }

    $scope.loadFile = function() {
        dialog.showOpenDialog({properties: ['openFile']}, function (fileNames) {
            if (fileNames === undefined) return;
            var fileName = fileNames[0];
            fs.readFile(fileName, 'utf-8', function (err, data) {
                loadScopeBoxes(JSON.parse(data));
            });
        });
    }

    $scope.submitForm = function() {
        skipFormPanel();
        $scope.boxes = [];
        var dimension = 30;
        var hauteur = $scope.hauteur = +$('#create-form input[name=hauteur]').val();
        var longueur = $scope.longueur = +$('#create-form input[name=longueur]').val();
        var elt = document.getElementsByClassName("container");
        elt[0].style.width = (longueur * dimension) + "px";

        for (var i = 0; i < hauteur; i++) {
            for (var k = 0; k < longueur; k++) {
                $scope.boxes = $scope.boxes.concat({ left: (k * dimension) + "px", top: (i * dimension) + "px", display: 'block', background: 'none', weight: 1, width: "30px" });
            }
        }
    }

    function skipFormPanel() {
        jQuery('.form-container').fadeOut( "slow", function() {
            jQuery('.toolbox').addClass('active');
        });
    }

    function loadScopeBoxes(jsonData) {
        // Use scope apply because fs load file is a new turn on our script
        $scope.$apply(function () {
            skipFormPanel();
            $scope.boxes = [];
            var dimension = 30;
            var hauteur = $scope.hauteur = +jsonData.dimensions.hauteur;
            var longueur = $scope.longueur = +jsonData.dimensions.longueur;
            var elt = document.getElementsByClassName("container");
            elt[0].style.width = (longueur * dimension) + "px";
            $scope.boxes = jsonData.datas;
        });
    }

    // ** Ajouter des datas dans la collection **
    // Lokiwork.addCollection(json1);
    // ** Ajouter des datas dans la collection **
    // Lokiwork.addDocument(json1.db, json1.collection, { name: "test", location: "location", weight: "toto" });
    // ** Obtenir la le contenu de la collection **
    // console.log(Lokiwork.getCollection(json1.db, json1.collection));

});
