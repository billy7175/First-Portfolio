const perspectives = document.querySelectorAll('.perspective')
console.log('perspectives:',perspectives)

const cubes = document.querySelectorAll('.cube')
console.log('cubes:',cubes)

const contents = document.querySelectorAll('.content')
console.log('contents:',contents)
const content_top = contents[0].offsetTop

const split01 = document.querySelectorAll('.split01')
console.log(split01)

const split02 = document.querySelectorAll('.split02')
console.log(split02)

const kakaos = document.querySelectorAll('.kakao')
console.log('kakaos:',kakaos)

const content02_top = contents[1].offsetTop;
window.addEventListener('scroll',()=>{
  let scroll_top = window.scrollY;
  if(scroll_top > content_top -300){
    perspectives[0].style.transform='scale(1.7)'
    perspectives[0].style.left='10%'  
    cubes[0].classList.add('active')
    split01.forEach((split,index)=>{
      split.classList.add('undo')
    }) 
  } else {
    perspectives[0].style.transform='scale(1.0)'
    
    perspectives[0].style.left='25%'
    
    cubes[0].classList.remove('active')
    
    split01.forEach((split,index)=>{
      split.classList.remove('undo')
    })
    
  }

  if(scroll_top > content_top+150){
    perspectives[1].style.transform='scale(1.7)'
    perspectives[1].style.left='10%'
    cubes[1].classList.add('active')
    split02.forEach((split,index)=>{
      split.classList.add('undo')
    })
  } else {
    perspectives[1].style.transform='scale(1.0)'
    perspectives[1].style.left='25%'
    cubes[1].classList.remove('active')
    split02.forEach((split,index)=>{
      split.classList.remove('undo')
    })
  }

  if(scroll_top >contents[1].offsetTop-100){
    console.log('break_point')
    kakaos.forEach((kakao,index)=>{
      kakao.classList.add('active')
    })
  }  else {
    kakaos.forEach((kakao,index)=>{
      kakao.classList.remove('active')
    })
  }


})