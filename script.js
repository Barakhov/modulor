Splitting();

let reg = document.querySelector("body");
let img = document.querySelector(".screen");
let cnt = document.querySelector(".container");
let emptyButton = document.querySelector(".empty");
let sumButton = document.querySelector(".sum")
let restButton = document.querySelector(".rest")
let extraButton = document.querySelectorAll(".extra")


let counter = 1;

function report() { 
 extraButton.forEach(el => el.classList.add('transparent'))
  html2canvas(reg, {
    onrendered: function(canvas) {
      let pngUrl = canvas.toDataURL();
      img.src = pngUrl; 
      cnt.classList.add('hover')
      emptyButton.classList.remove('hidden')

    },
  });
}

function empty() {
  extraButton.forEach(el => el.classList.remove('transparent'))
  img.setAttribute('src', '');
  cnt.classList.remove('hover')  
  emptyButton.classList.add('hidden')
}

function handleSum() {

  if(counter <= 7) {
    counter += 1;
    restButton.removeAttribute("disabled");
  } else {
    sumButton.setAttribute("disabled", ""); 
  }

  let convesion = 9 - counter;

  document.querySelector('[data-'+convesion+']').classList.remove('hide');

}

function handleRest() {
  if(counter <= 8 && counter >= 2) {
    counter -= 1;
    sumButton.removeAttribute("disabled");
  } else {
    restButton.setAttribute("disabled", ""); 
  }

  let convesion = 8 - counter;
  document.querySelector('[data-'+convesion+']').classList.add('hide');
}



let modal = document.querySelector(".modal")
function modalShow() {
  modal.classList.remove('hide')
}


function modalHide() {
  modal.classList.add('hide')
}