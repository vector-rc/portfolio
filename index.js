// var file = new File([`
//       <div class="contact" id="contact">
//       <h2>Contact me</h2>
//       <form>
//         <input type="email" placeholder="Email" />
//         <textarea
//           name="content"
//           id=""
//           placeholder="Escribe aqui el mensaje"
//         ></textarea>
//         <input class="btn" type="submit" value="Mandame un mensaje" />
//       </form>
//     </div>
// `],"hello world.html",{type:"text/html;charset=utf-8"});

// // obtienes una URL para el fichero que acabas de crear
// var url  = window.URL.createObjectURL(file);
// // creas un enlace y lo añades al documento
// var a = document.createElement("a");
// document.body.appendChild(a);

// // actualizas los parámetros del enlace para descargar el fichero creado
// a.href = url;
// a.innerHTML = "Descargar fichero";
// a.download = file.name;


// fetch("hola.txt")
// .then(response => response.text())
// .then(console.log);

// fetch("hola.txt",{
//   method:"POST",
//   body:"vamo a ver"
// })
// .then(response => response.text())
// .then(console.log);

// let project=$(".project")
// let infoProject=$(".info")
// let imgProject=$(".img")

// project.addEventListener("mouseover",(e)=>{
//   infoProject.style.transform="translate(0%)"
//   imgProject.style.transform="translate(0%)"
// })





function $(query){
    return document.querySelector(query)
}

let saludo=$(".saludo")
saludo.innerHTML=separateText("Hola, mi nombre es"," ")

let h1 = $(".titulo");
h1.innerHTML = separateText("Fernando Rodriguez");

let description = $(".description");
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
//Soy Desarrollador de Software, y un apasionado por la tecnologia.




let cursors = document.querySelectorAll(".cursor-mouse");

let cursor=$(".cursor-mouse:nth-child(6)")

document.addEventListener("mousemove", function (e) {
  cursors.forEach((element)=>{
  element.style.top = (e.pageY).toString() + "px";
  element.style.left = (e.pageX).toString() + "px";
  })
});
document.addEventListener("mousedown", function (e) {
  cursor.style.transform = "scale(0.5)";
});

document.addEventListener("mouseup", function (e) {
  cursor.style.transform = "scale(1)";
});

let navbar=$("header")

window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    //console.log(this.oldScroll > this.scrollY);
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
        tooltipText.innerHTML=e.target.dataset.level;
        tooltip.style.opacity="1"
        tooltip.style.top = (e.pageY+10).toString() + "px" ;
        tooltip.style.left = (e.pageX+10).toString() + "px";
        //console.log(e);
    
    })
    
    e.addEventListener("mouseleave",(e)=>{
        barFg.style.width="0";
        e.target.dataset.level;
        tooltip.style.opacity="0";
    
    })
})




// //////////////// esto es para cambiar el menu contextual


// html

// <div class="context-menu">
// aqui va el contenido del menu
// </div> 

// /css
// .context-menu{
//   background-color: #2efe9a;
//   opacity: 0;
//   position: absolute;
// }

// document.oncontextmenu=(e)=>{return false}

// let cm=$(".context-menu")
// document.addEventListener("mousedown",(e)=>{
//   e.preventDefault
//   console.log( e.button);
//   if (e.button==2){
//     //alert("sdsdfsdf")
//     cm.style.opacity="1"
//     cm.style.top = (e.pageY).toString() + "px" ;
//     cm.style.left = (e.pageX).toString() + "px";
//   }
// })