const datos = [{
    img: 'https://media.istockphoto.com/id/1413514774/es/foto/dise%C3%B1o-de-iconos-html-3d-estilizado.jpg?s=612x612&w=0&k=20&c=xBDT2y5fQrmVpGSXyWbIdhKQXosFmugJAiqVRIZ2VtI=',
    desc:'HTML'
},
{
    img: 'https://media.istockphoto.com/id/1413514596/es/foto/dise%C3%B1o-de-icono-css-3d-estilizado.jpg?s=612x612&w=0&k=20&c=grI6SNj9239-bNfzMFuySKWKEEtBmeULV1SEDspWv5g=',
    desc:'CSS'
},
{
img: 'https://media.istockphoto.com/id/1413514720/es/foto/dise%C3%B1o-de-iconos-javascript-3d-estilizado.jpg?s=612x612&w=0&k=20&c=tuugEFb6bdJQXOQwNzpOxcQGBrCR734P_POMCmE7th0=',
desc:'Javascript'
},
]
let proyectos =document.querySelector('#proyectos');


function dinamico (src,desc) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src= src;
    let p = document.createElement("p");
    p.innerHTML= desc;
    p.style.backgroundColor="red";
    div.appendChild(img);
    div.appendChild(p);
    proyectos.appendChild(div);
}
datos.forEach(({img, desc})=> dinamico (img,desc));

