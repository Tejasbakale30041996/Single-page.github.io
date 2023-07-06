

function myfun(){

    document.getElementById("java").style.display="block";
}

function remove(){
    
    document.getElementById("java").style.display="none";
}



let counts = setInterval(updated);
let upto = 1000;
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = --upto;
    if (upto === 0) {
        clearInterval(counts);
    }
}


function get(){

    document.getElementById("get").style.display="block";
}

function getnumber(){
   
    document.getElementById("get").style.display="none";

}

