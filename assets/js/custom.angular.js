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
        { "s": "assets/symbols/1002.png" },
        { "s": "assets/symbols/1003.png" },
        { "s": "assets/symbols/1004.png" },
        { "s": "assets/symbols/1005.png" },
        { "s": "assets/symbols/1006.png" },
        { "s": "assets/symbols/1007.png" },
        { "s": "assets/symbols/1008.png" },
        { "s": "assets/symbols/1009.png" },
        { "s": "assets/symbols/1010.png" },
        { "s": "assets/symbols/1011.png" },
        { "s": "assets/symbols/1012.png" },
        { "s": "assets/symbols/1013.png" },
        { "s": "assets/symbols/1014.png" },
        { "s": "assets/symbols/1015.png" },
        { "s": "assets/symbols/1016.png" },
        { "s": "assets/symbols/1017.png" },
        { "s": "assets/symbols/1018.png" },
        { "s": "assets/symbols/1019.png" },
        { "s": "assets/symbols/1020.png" },
        { "s": "assets/symbols/1021.png" },
        { "s": "assets/symbols/1022.png" },
        { "s": "assets/symbols/1023.png" },
        { "s": "assets/symbols/1024.png" },
        { "s": "assets/symbols/1025.png" },
        { "s": "assets/symbols/1026.png" },
        { "s": "assets/symbols/1027.png" },
        { "s": "assets/symbols/1028.png" },
        { "s": "assets/symbols/1029.png" },
        { "s": "assets/symbols/1030.png" },
        { "s": "assets/symbols/1031.png" },
        { "s": "assets/symbols/1032.png" },
        { "s": "assets/symbols/1033.png" },
        { "s": "assets/symbols/1034.png" },
        { "s": "assets/symbols/1035.png" },
        { "s": "assets/symbols/1036.png" },
        { "s": "assets/symbols/1037.png" },
        { "s": "assets/symbols/1038.png" },
        { "s": "assets/symbols/1039.png" },
        { "s": "assets/symbols/1040.png" },
        { "s": "assets/symbols/1041.png" },
        { "s": "assets/symbols/1042.png" },
        { "s": "assets/symbols/1043.png" },
        { "s": "assets/symbols/1044.png" },
        { "s": "assets/symbols/1045.png" },
        { "s": "assets/symbols/1046.png" },
        { "s": "assets/symbols/1047.png" },
        { "s": "assets/symbols/1048.png" },
        { "s": "assets/symbols/1049.png" },
        { "s": "assets/symbols/1050.png" },
        { "s": "assets/symbols/1051.png" },
        { "s": "assets/symbols/1052.png" },
        { "s": "assets/symbols/1054.png" },
        { "s": "assets/symbols/1055.png" },
        { "s": "assets/symbols/10001.png" },
        { "s": "assets/symbols/10002.png" },
        { "s": "assets/symbols/12001.png" },
        { "s": "assets/symbols/12002.png" },
        { "s": "assets/symbols/1999.png" },
        { "s": "assets/symbols/2000.png" },
        { "s": "assets/symbols/2001.png" },
        { "s": "assets/symbols/2002.png" },
        { "s": "assets/symbols/2003.png" },
        { "s": "assets/symbols/2004.png" },
        { "s": "assets/symbols/2005.png" },
        { "s": "assets/symbols/2006.png" },
        { "s": "assets/symbols/2007.png" },
        { "s": "assets/symbols/2008.png" },
        { "s": "assets/symbols/2009.png" },
        { "s": "assets/symbols/2011.png" },
        { "s": "assets/symbols/2013.png" },
        { "s": "assets/symbols/2014.png" },
        { "s": "assets/symbols/2015.png" },
        { "s": "assets/symbols/2016.png" },
        { "s": "assets/symbols/2017.png" },
        { "s": "assets/symbols/2018.png" },
        { "s": "assets/symbols/2019.png" },
        { "s": "assets/symbols/3000.png" },
        { "s": "assets/symbols/3001.png" },
        { "s": "assets/symbols/3002.png" },
        { "s": "assets/symbols/3003.png" },
        { "s": "assets/symbols/3004.png" },
        { "s": "assets/symbols/3005.png" },
        { "s": "assets/symbols/3006.png" },
        { "s": "assets/symbols/3007.png" },
        { "s": "assets/symbols/3008.png" },
        { "s": "assets/symbols/3009.png" },
        { "s": "assets/symbols/3010.png" },
        { "s": "assets/symbols/3011.png" },
        { "s": "assets/symbols/3012.png" },
        { "s": "assets/symbols/3013.png" },
        { "s": "assets/symbols/3014.png" },
        { "s": "assets/symbols/3015.png" },
        { "s": "assets/symbols/3016.png" },
        { "s": "assets/symbols/3017.png" },
        { "s": "assets/symbols/3018.png" },
        { "s": "assets/symbols/3019.png" },
        { "s": "assets/symbols/3020.png" },
        { "s": "assets/symbols/3021.png" },
        { "s": "assets/symbols/4000.png" },
        { "s": "assets/symbols/4001.png" },
        { "s": "assets/symbols/4002.png" },
        { "s": "assets/symbols/4003.png" },
        { "s": "assets/symbols/4004.png" },
        { "s": "assets/symbols/4005.png" },
        { "s": "assets/symbols/4008.png" },
        { "s": "assets/symbols/4009.png" },
        { "s": "assets/symbols/4010.png" },
        { "s": "assets/symbols/4011.png" },
        { "s": "assets/symbols/4012.png" },
        { "s": "assets/symbols/4013.png" },
        { "s": "assets/symbols/4014.png" },
        { "s": "assets/symbols/4015.png" },
        { "s": "assets/symbols/4018.png" },
        { "s": "assets/symbols/4019.png" },
        { "s": "assets/symbols/4025.png" },
        { "s": "assets/symbols/4026.png" },
        { "s": "assets/symbols/5001.png" },
        { "s": "assets/symbols/5002.png" },
        { "s": "assets/symbols/5003.png" },
        { "s": "assets/symbols/5004.png" },
        { "s": "assets/symbols/5005.png" },
        { "s": "assets/symbols/5006.png" },
        { "s": "assets/symbols/5007.png" },
        { "s": "assets/symbols/5008.png" },
        { "s": "assets/symbols/5009.png" },
        { "s": "assets/symbols/5010.png" },
        { "s": "assets/symbols/5011.png" },
        { "s": "assets/symbols/5012.png" },
        { "s": "assets/symbols/5013.png" },
        { "s": "assets/symbols/6001.png" },
        { "s": "assets/symbols/6002.png" },
        { "s": "assets/symbols/6003.png" },
        { "s": "assets/symbols/6004.png" },
        { "s": "assets/symbols/6005.png" },
        { "s": "assets/symbols/6006.png" },
        { "s": "assets/symbols/6011.png" },
        { "s": "assets/symbols/6012.png" },
        { "s": "assets/symbols/6014.png" },
        { "s": "assets/symbols/6015.png" },
        { "s": "assets/symbols/7001.png" },
        { "s": "assets/symbols/7002.png" },
        { "s": "assets/symbols/7003.png" },
        { "s": "assets/symbols/7004.png" },
        { "s": "assets/symbols/7005.png" },
        { "s": "assets/symbols/8001.png" },
        { "s": "assets/symbols/8002.png" },
        { "s": "assets/symbols/8003.png" },
        { "s": "assets/symbols/8004.png" },
        { "s": "assets/symbols/8005.png" },
        { "s": "assets/symbols/8006.png" },
        { "s": "assets/symbols/8007.png" },
        { "s": "assets/symbols/9001.png" },
        { "s": "assets/symbols/9002.png" },
        { "s": "assets/symbols/9003.png" },
        { "s": "assets/symbols/9004.png" },
        { "s": "assets/symbols/9005.png" },
        { "s": "assets/symbols/9006.png" },
        { "s": "assets/symbols/9007.png" },
        { "s": "assets/symbols/9008.png" }
    ]
);

/******** ARTICLE DETAIL CONTROLLER ********/
app.controller('MainCtrl', function($scope, Lokiwork, json1, symbols) {

    $scope.symbols = symbols;
    $scope.erase = 0;
    var selectedSymbol = null;
    $scope.boxes = [];

    $scope.newPlan = function() {
        jQuery('.form-container').fadeIn( "slow", function() {
            jQuery('.toolbox').removeClass('active');
        });
    };

    $scope.selectSymbol = function($e) {
        jQuery('.symbol-container > img').removeClass("enabled");
        // desactive le eraser
        if($scope.erase) {
            $scope.erase = ! $scope.erase;
            jQuery("#eraserBtn").toggleClass("enabled");
        }
        selectedSymbol = $e.currentTarget;
        selectedSymbol.classList.toggle("enabled");
    }

    $scope.eraserMode = function($e) {
        elt = $e.currentTarget;
        // Desactive selection image
        jQuery('.symbol-container > img').removeClass("enabled");

        $scope.erase = ! $scope.erase;
        elt.classList.toggle("enabled");
    };

    $scope.boxClick = function($e) {
        elt = $e.currentTarget;

        if(selectedSymbol) {
            elt.style.backgroundImage = "url('" + selectedSymbol.src + "')";
        }
        // If erase mode enabled
        if($scope.erase) {
            elt.style.backgroundImage = "none";
        }
    }

    $scope.submitForm = function() {
        skipFormPanel();
        var dimension = 30;
        var hauteur = +$('#create-form input[name=hauteur]').val();
        var longueur = +$('#create-form input[name=longueur]').val();
        var elt = document.getElementsByClassName("container");
        elt[0].style.width = (longueur * dimension) + "px";

        for (var i = 0; i < hauteur; i++) {
            for (var k = 0; k < longueur; k++) {
                $scope.boxes = $scope.boxes.concat({ left: (k * dimension) + "px", top: (i * dimension) + "px" });
            }
        }
    }

    function skipFormPanel() {
        jQuery('.form-container').fadeOut( "slow", function() {
            jQuery('.toolbox').addClass('active');
        });
    }

    // ** Ajouter des datas dans la collection **
    // Lokiwork.addCollection(json1);
    // ** Ajouter des datas dans la collection **
    // Lokiwork.addDocument(json1.db, json1.collection, { name: "test", location: "location", weight: "toto" });
    // ** Obtenir la le contenu de la collection **
    // console.log(Lokiwork.getCollection(json1.db, json1.collection));

});

/*app.directive('canvas', function() {
    var linkFn;
    linkFn = function(scope, element, attrs) {
        scope.boxes = [];

        scope.addBox = function () {
            scope.boxes.push({});
        };

        scope.color = function (b) {
            b.isRed = true;
        }
    };
    return {
        restrict: 'E',
        link: linkFn,
        template: '<button ng-click="addBox()">Add a box</button><BR/><div><div class="box" ng-repeat="b in boxes" ng-click="color(b)" ng-class="{ red: b.isRed }"></div></div>',
        scope: {
        }
    };
});*/

