var main = document.getElementById("main");
var addbtn = document.getElementById("add");
var rembtn = document.getElementById("rem");
var count = 1;


addbtn.addEventListener("click",function(){
    var div = document.createElement("div");
    div.className = "add-div";
    div.innerHTML = count++;

    main.appendChild(div);
});

rembtn.addEventListener("click",function(){
    var main = document.getElementById("main");
    var divs = document.getElementsByClassName("add-div");
    if(divs.length > 0){
        main.removeChild(...divs,[divs.length -1]);
        count--;
    }
})