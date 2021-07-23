function $(query){
    return document.querySelector(query)
}

let saludo=$(".saludo")
saludo.innerHTML=separateText("Hola, mi nombre es"," ")

let h1 = $(".titulo");
h1.innerHTML ='<span class="sub-title">'+ separateText("Fernando")+'</span><span class="sub-title">'+separateText("Rodriguez")+"</span>";

let description = $(".info");
description.innerHTML = separateText(`Soy un estudiante de Desarrollo de software apasionado por la tecnologia al que le encanta el desarrollo de videojuegos.`," ");



function separateText(text,separator="") {
  let textSeparate = "";
  text.split(separator).forEach((element) => {
      if (separator!=""){
        textSeparate += `<pre class="char">${element} </pre>`;
      }
      else{
        textSeparate += `<pre class="char">${element}</pre>`;
      }
    
  });
  return textSeparate;
}


let navbar=$("header")

window.onscroll = function(e) {
    if ((this.oldScroll > this.scrollY)){
        navbar.style.transform="translateY(0)"
    }else{
          navbar.style.transform="translateY(-100%)"
    }

    this.oldScroll = this.scrollY;
  }

let skill =$(".skill")
let tooltip=$(".tooltip")
let tooltipText=$(".tooltip-text")
let barFg=$(".bar-fg")


document.querySelectorAll(".skill").forEach((e)=>{
    e.addEventListener("mouseover",(e)=>{
        barFg.style.width=e.target.dataset.level;
        tooltipText.innerHTML=e.target.dataset.name+" "+e.target.dataset.level;
        tooltip.style.opacity="1"
        tooltip.style.top = (e.pageY+10).toString() + "px" ;
        tooltip.style.left = (e.pageX+10).toString() + "px";
    
    })
    
    e.addEventListener("mouseleave",(e)=>{
        barFg.style.width="0";
        e.target.dataset.level;
        tooltip.style.opacity="0";
    
    })
})
