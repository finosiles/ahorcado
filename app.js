// FUNCION INCIO

let palabras = ["casa", "perro", "avion", "saludo","boca", "campeon", "arena", "fiera", "enana","pension", "presencia", "futbol", "auto", "cocina", "aventura", "programacion", "ayuda", "construccion","durmiente", "ascensor", "televisor"];

let btn;
let letra;
let adivinar;
let aleatorio
let jugar = document.getElementById("jugar");
let acertadas = 0;
let erradas = 0;
let central_canvas = document.querySelector("#imagen");
jugar.addEventListener("click",inicio);


function inicio(){
    central_canvas.src="./img/img00.png";
    //Crea el número a adivinar.
    aleatorio = Math.floor(Math.random()* palabras.length);
    adivinar = palabras[aleatorio].toUpperCase();
    // Variables para contar los errores y aciertos.
    acertadas = 0;
    erradas = 0;
    //AGREGA LA CANTIDAD DE GUIONES A ADIVINAR
    let agregar = document.getElementById("agregar");
    jugar.disabled = true;
    agregar.innerHTML = " ";
    for(let i=0; i< adivinar.length ; i++){
	agregar.insertAdjacentHTML('beforeend',`<span> _ </span>`);
    }
}
// Lecturas de los botones para cada letra a comparar.

let teclas = document.querySelectorAll(".teclas button");
for(let i=0;i<teclas.length;i++){
    teclas[i].addEventListener("click",revisando);
    
}



function revisando(event){
    let guiones = document.querySelectorAll("#agregar span");
    btn = event.target;
    btn.disabled = true;
    let letra = btn.innerHTML.toUpperCase();
    let acierto = false;
    for(let i = 0; i< adivinar.length ; i++){
	 
	if( letra == adivinar[i] ){
	    guiones[i].innerHTML = letra;
	    acertadas++ ;
	    acierto = true;
	}
			
    }
    let src;
  
    let letras_erradas = document.querySelector(".central_erradas");
    if(acierto == false ){
	letras_erradas.insertAdjacentHTML("beforeend",`<span id="errada">${letra}</span>`);
	erradas++;


    }
 
    src = erradas;	
    let source = `./img/img0${src}.png`;
    central_canvas.src = source ;
    
   
    let mensaje = document.querySelector(".central_mensajes");
    if(erradas == 7){
	
	mensaje.insertAdjacentHTML("beforeend",`
         <div class="final">
            <img id="muerto" alt="" src="./img/img07.png"/>
            <h1 >PERDISTE LA PALABRA ES ${adivinar}</h1>
            <button id="reload"> Volver a jugar</button>

         </div>`);
	let recarga = document.querySelector("#reload");

	recarga.addEventListener("click", ()=>{
	    location.reload()});
    }else if(acertadas == adivinar.length){
	mensaje.insertAdjacentHTML("beforeend",` <div class="final">
             <img id="gano"  alt="" src="./img/Logo.svg"/">
            <h1 >EXCELENTE HAS GANADO</h1>
            <button id="reload"> Volver a jugar</button>

         </div>`);
	let recarga = document.querySelector("#reload");

	recarga.addEventListener("click", ()=>{
	    location.reload()});

    }
    
}


