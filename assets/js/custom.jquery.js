$( document ).ready(function(){
    $( "#create-form" ).submit(function( event ) {
        event.preventDefault();
        var dimension = 30;
        var hauteur = +$('#create-form input[name=hauteur]').val();
        var longueur = +$('#create-form input[name=longueur]').val();
        var canvas = document.getElementById("canvas");
        var elt = document.getElementsByClassName("container");
        elt[0].style.width = (longueur * dimension) + "px";

        for (var i = 0; i < hauteur; i++) {
            for (var k = 0; k < longueur; k++) {
                var para = document.createElement("div");
                para.classList.add("box");
                para.style.left = (k * dimension) + "px";
                para.style.top = (i * dimension) + "px";
                canvas.appendChild(para);
                para.addEventListener('dragenter', function() {
                    this.style.borderStyle = 'dashed';
                });
                para.addEventListener('dragleave', function() {
                    this.style.borderStyle = 'solid';
                });
                para.addEventListener('dragover', function(e){
                    e.preventDefault();
                }, false);
                para.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.style.borderStyle = 'solid';
                    var data = e.dataTransfer.getData("source");
                    this.style.backgroundImage = "url('" + data + "')";
                });
            }
        }
    });
});

function drag(ev) {
    ev.dataTransfer.setData("source", ev.target.src);
}