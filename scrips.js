const datos = [{
    img: 'https://github.com/DanyBF/Pagina-web-con-HTML-CSS-y-Javascript/blob/main/archivos/file_type_html_icon_130541.png?raw=true',
    desc:'HTML'
},
{
    img: 'https://github.com/DanyBF/Pagina-web-con-HTML-CSS-y-Javascript/blob/main/archivos/CSS3_logo.svg.png?raw=true',
    desc:'CSS'
},
{
img: 'https://github.com/DanyBF/Pagina-web-con-HTML-CSS-y-Javascript/blob/main/archivos/file_type_html_icon_130541.png?raw=true',
desc:'HTML'
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

