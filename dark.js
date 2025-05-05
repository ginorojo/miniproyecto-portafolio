let darkButton = document.querySelector("#dark");
darkButton.addEventListener("click" , changeDarknes);

function changeDarknes(){
    document.documentElement.classList.toggle("dark")
}

//agregar navegacion
const menuItems = ["INICIO", "HABILIDADES", "PROYECTOS","CONTACTO"];

let barraNav=document.getElementById("navegacion");
let contacto=document.getElementById("contacto")

let nav=`
    <li><a class="hover:text-[#E3FF6A] " href="#">${menuItems[0]}</a></li>
    <li><a class="hover:text-[#E3FF6A] " href="#">${menuItems[1]}</a></li>
    <li><a class="hover:text-[#E3FF6A] " href="#">${menuItems[2]}</a></li>

    `
barraNav.innerHTML=nav;            

let contactar =`
    <a class="hover:text-[#E3FF6A]" href="#">${menuItems[3]}</a>
    <img class="w-5" src="./images/right-top-arrow-circle-regular-24.png" alt="" />
`
contacto.innerHTML=contactar;

//titulo

let tituloprin = document.getElementById("titulopri")

const titulos={
    nombre:"Gino",
    apellido:"Rojo",
    titulo:"Frontend Developer"
}
let titulo=`
<h1 class="text-[40px] font-semibold">I'am <span class="text-[#E3FF6A] italic">${titulos.nombre}${titulos.apellido}</span></h1>
<span class="text-[42px] font-semibold">${titulos.titulo}</span>`

tituloprin.innerHTML=titulo;


//habilidades
const perfil = [
    {
      tipo: "presentacion",
      contenido: "I'm Gino Rojo Jorquera, a front-end developer"
    },
    {
      tipo: "habilidades",
      contenido: ["HTML", "CSS", "JavaScript", "Python", "MySQL"]
    },
    {
      tipo: "descripcion",
      contenido: "My work involves writing clean, organized, and efficient code, applying good development practices."
    },
    {
      tipo: "aprendizaje",
      contenido: "I'm constantly learning and updating to incorporate new web tools and technologies."
    }
  ];

let habilidad=document.getElementById("habilidades")

let skills=`

<p>${perfil[0].contenido} with expertise in</p>`

skills += `<div class="flex justify-center">`
perfil[1].contenido.forEach(element => {
skills+= `<p>${element},</p>`
});
skills += `</div>`
skills+=`<br>
<p>${perfil[2].contenido},</p>
<br>
<p>${perfil[3].contenido}.</p>
`

habilidad.innerHTML=skills;






const imagenes = [
  "./images/html5-logo-24.png",
  "./images/css3-logo-24.png",
  "./images/file-js-solid-24.png",
  "./images/react-logo-24.png",
  "./images/python-logo-24.png",
  "./images/nodejs-logo-24.png",
  "./images/tailwind-css-logo-24.png",
  "./images/vuejs-logo-24.png"
];

let contenedortecnics=document.querySelector("#tecnics")

contenedortecnics.innerHTML=""

for (let index = 0; index < imagenes.length; index++) {

  contenedortecnics.innerHTML += `
  
<div class="rounded-lg  bg-[#1d2236] xl:w-[200px] xl:h-[190px] w-[140px] h-[150px] flex justify-center items-center inset-shadow-sm inset-shadow-gray-600 ">
  <img class=" w-[40%]" src=${imagenes[index]} alt=""> 
  
  ` 
}

let contenedorOtrastecnics= document.querySelector("#otrasTecnics")
contenedorOtrastecnics.innerHTML=""

for (let index = 0; index < imagenes.length; index++) {
  contenedorOtrastecnics.innerHTML+=`
    <div class="inset-shadow-xs w-[50px] h-[50px] flex justify-center items-center">
       <img class="w-[100%]" src=${imagenes[index]} alt="">
    </div>
`}

const imagenesAbout = [
  "./images/personas-trabajando.jpg",
  "./images/personas-trabajando2.jpg",
  "./images/personas-trabajando.jpg"
];

let personasTrabaj = document.querySelector("#personasTrab")
let personasTrabaj2 = document.querySelector("#personasTrab2")

personasTrabaj.innerHTML=""
        personasTrabaj.innerHTML+=`
        <div id="personasTrab" class= "pt-[100px] w-[100%]  md:w-[200px] md:h-600px flex md:flex-col justify-center gap-[20px] items-center md:justify-between" >
          <img class="w-[250px] h-[300px]  md:w-[100px] md:h-[120px] md:-rotate-15 rounded-xl md:drop-shadow-[-50px_-50px_40px_rgba(211,213,211)]" src="${imagenesAbout[0]}" alt="">
          <img class="w-[250px] h-[300px] md:w-[160px] md:h-[200px] md:rotate-12 rounded-xl md:drop-shadow-[100px_80px_60px_rgba(211,213,211)]" src="${imagenesAbout[1]}" alt="">
        </div> `
personasTrabaj2.innerHTML=""
        personasTrabaj2.innerHTML+=`
        <div id="personasTrab2" class="personasTrab hidden md:block  w-[100px] md:w-[200px] md:h-[600px]  flex-col justify-center items-end md:items-center md:justify-center md:flex" >
            <img class="w-[100px] h-[150px] md:w-[160px] md:h-[200px] md:-rotate-12 rounded-xl  md:drop-shadow-[-50px_-80px_70px_rgba(211,213,211)]" src="${imagenesAbout[2]}" alt="">
        </div>
        `





        const seccionProyectos = {
          titulo: "THE WORK CLOSEST TO MY HEART",
          boton: "SHOW MY PROJECTS",
          proyectos: [
            {
              href: "https://ginorojo.github.io/wdd231/chamber/",
              imagen: "./images/chamber.png"
            },
            {
              href: "https://ginorojo.github.io/wdd131/project/index.html",
              imagen: "./images/hungry.png"
            },
            {
              href: "https://ginorojo.github.io/wdd231/chamber/join.html",
              imagen: "./images/form.png"
            }
          ]
        };
        

let reposit = document.querySelector("#repo")
reposit.innerHTML=""
  
reposit.innerHTML += `
<a class="w-[80%] h-[400px] md:w-[40%] md:h-[300px]" href="${seccionProyectos.proyectos[0].href}" target="_blank" >
            <img class="border-2 rounded-xl w-[100%] h-[100%]" src="${seccionProyectos.proyectos[0].imagen}" alt="" >
          </a>
          <a class="w-[60%] h-[400px] md:w-[25%] md:h-[300px]" href="${seccionProyectos.proyectos[1].href}" target="_blank">
            <img class="border-2 rounded-xl w-[100%] h-[100%]" src="${seccionProyectos.proyectos[1].imagen}" alt="">
          </a>
          <a class="w-[60%] h-[400px]  md:w-[25%] md:h-[300px]" href="${seccionProyectos.proyectos[2].href}" target="_blank">
            <img class="border-2 rounded-xl w-[100%] h-[100%]" src="${seccionProyectos.proyectos[2].imagen}" alt="">
          </a>   


`
  
let repositorioTit=document.querySelector("#repotit")
repositorioTit.innerHTML=""
repositorioTit.innerHTML+=`
  <div class="md:w-[60%] w-[60%] h-[300px] flex flex-col items-center justify-center ">
        <span class="text-[30px] font-bold text-center md:text-[30px] md:text-center text-[#0a0f22] dark:text-white dark:text-center">${seccionProyectos.titulo}</span>
    </div>  

`
let botonReposit=document.querySelector("#btnRepo")
botonReposit.innerHTML=""
botonReposit.innerHTML +=`

<button class="bg-[#0a0f22] hover:bg-[#e6f79d] dark:bg-[#E3FF6A] w-[300px] dark:text-black font-semibold h-[30px] flex items-center justify-center rounded-full md:absolute md:top-[90%] md:right-[95%] absolute top-[110%] right-[30%]">
${seccionProyectos.boton}
</button >

`