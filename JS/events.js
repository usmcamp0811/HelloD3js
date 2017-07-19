var over = document.getElementById("Over");
var mousedown = document.getElementById("Mousedown");
var mouseup;
var click = document.getElementById("Click");

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function update(obj){
    if(obj.className==="active"){
        obj.className = "default";
    }else{
        obj.className = "active";
    }
}



over.addEventListener("mouseenter", function() {
    over.className = "active";
    over.textContent = "Mouse Leave";

})

over.addEventListener("mouseleave", function() {
    over.className = "default";
    over.textContent = "Mouse Enter";

})

mousedown.addEventListener("mousedown", function() {
    mousedown.textContent = "Mouse Up";
    mousedown.className = "active";
    mousedown.id = "Mouseup";
    var mouseup = document.getElementById("Mouseup");
    mouseup.addEventListener("mouseup", function() {
        mouseup.className = "default";
        mousedown.textContent = "Mouse Down";
    })

})

