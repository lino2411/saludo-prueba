let hojas = "";
[15,1,1,2].forEach(function(a){
    Array(a).fill("").forEach(function(x,i){
        hojas+=([...Array(1+i).fill("<span class='colores'>**</span>")].join(""))+ "<br>"
    })
})
document.querySelector(".arbol").innerHTML=hojas;

// colocamos loscolores al arbol

let colores=document.querySelectorAll(".colores");
function animacion(){
   for (let i=0; i<colores.length; i++) {
        let tiempo = i/100+1;
        colores[i].style.animation="color " + tiempo + "s infinite"
    }
}


window.addEventListener("load",animacion)



function stars (){
    let div = document.createElement("div");
    div.setAttribute("class", "star");
    document.body.appendChild(div);

    div.style.left = Math.random()* + innerWidth + "px";

    let size = Math.random()*12;

    let duration = Math.random()* 3;

    div.style.fontSize = 12 + size + "px";

    div.style.animationDuration = 3 + duration + "s";

    setTimeout(() =>{
        document.body.removeChild(div)
    },5000)

}
setInterval(()=>{
    stars();
},100)

