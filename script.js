Splitting();

let reg = document.querySelector("body");
let img = document.querySelector(".screen");
let cnt = document.querySelector(".container");
let btn = document.querySelector(".empty");

function report() { 
  html2canvas(reg, {
    onrendered: function(canvas) {
      let pngUrl = canvas.toDataURL();
      img.src = pngUrl; 
      cnt.classList.add('hover')
      btn.classList.remove('hidden')

    },
  });
}

function empty() {
  img.setAttribute('src', '');
  cnt.classList.remove('hover')  
  btn.classList.add('hidden')
}