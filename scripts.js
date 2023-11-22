"use strict";

let img = document.querySelector(".img");
let hueRotate = document.querySelector(".hueRotate");
let grayScale = document.querySelector(".grayScale");
let sepia = document.querySelector(".sepia");
let invert = document.querySelector(".invert");
let saturate = document.querySelector(".saturate");
let brightness = document.querySelector(".brightness");
let blur = document.querySelector(".blur");
let contrast = document.querySelector(".contrast");
let reset = document.querySelector(".reset");
let mod = true;

const cargarArchivo = ar => {
	const reader = new FileReader();
	reader.readAsDataURL(ar);
	reader.addEventListener("load", e=>{
		let url = URL.createObjectURL(ar);
		let img = document.createElement("IMG");
		img.setAttribute("src", url);
		document.querySelector(".img").appendChild(img);
		document.querySelector(".txt").classList.add("hide");
	})
}	

hueRotate.addEventListener("change", ()=>{	
	modificar();
})

saturate.addEventListener("change", ()=>{
	modificar();
})

sepia.addEventListener("change", ()=>{
	modificar();
})

invert.addEventListener("change", ()=>{
	modificar();
})

grayScale.addEventListener("change", ()=>{
	modificar();
})

contrast.addEventListener("change", ()=>{
	modificar();
})

brightness.addEventListener("change", ()=>{
	modificar();
})

blur.addEventListener("change", ()=>{
	modificar();
})

const modificar = ()=>{
	img.style.filter=`contrast(${contrast.value}%) invert(${invert.value}%) sepia(${sepia.value/100}) saturate(${saturate.value}%) hue-rotate(${hueRotate.value}deg) grayscale(${grayScale.value}%) blur(${blur.value}px) brightness(${brightness.value})`;
}

reset.addEventListener("click", ()=>{
	img.style.filter=`blur(0) hue-rotate(0deg) saturate(100%) sepia(0) invert(0%) grayscale(0%) contrast(100%) brightness(1)`;
	blur.value = 0;
	brightness.value = 1;
	saturate.value = 100;
	sepia.value = 1;
	invert.value = 1;
	grayScale.value = 0;
	hueRotate.value = 1;
	contrast.value = 1;
})




img.addEventListener("dragover", (e)=>{
	e.preventDefault();
	if (mod) {
		changeStyle(e.srcElement, "#222");
	}
})

img.addEventListener("dragleave", (e)=>{
	e.preventDefault();
	if (mod) {
		changeStyle(e.srcElement, "#888");
	}
})

img.addEventListener("drop", (e)=>{
	e.preventDefault();
	if (mod) {
		changeStyle(e.srcElement, "#888");
		cargarArchivo(e.dataTransfer.files[0]);
		img.style.border = "4px solid #888";
		mod = false;
	}
})


const changeStyle = (obj, color)=>{
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`;
}
