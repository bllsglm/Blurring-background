const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 50)


function blurring() {
  load++;

  if(load > 99 ) {
    clearInterval(int)
  }

  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load, 0, 100 , 1, 0)
  let blurValue =  scale(load, 0, 100 , 20, 0)
  bg.style.filter = `blur(${blurValue}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}