
/*subMenu section*/ 

const subMenuWrap = document.querySelector('.subMenuWrap')
console.log(subMenuWrap)
const header = document.querySelector('.header')
console.log(header)

header.addEventListener('mouseenter',function(){
  subMenuWrap.style.opacity='1'
  subMenuWrap.style.transition='0.3s'
  subMenuWrap.addEventListener('mouseenter',function(){
    subMenuWrap.style.opacity='1'
  })
})
header.addEventListener('mouseleave',function(){
  subMenuWrap.style.opacity='0'
  subMenuWrap.style.transition='0.3s'
  subMenuWrap.addEventListener('mouseleave',function(){
    subMenuWrap.style.opacity='0'
  })
})

/* toggleMenu*/
var x = window.matchMedia("(max-width: 768px)")
if(x.matches){
  console.log('123213123')
const toggleMenu = document.querySelector('.toggleMenu')

toggleCount = 0;  
toggleMenu.addEventListener('click',function(){
  
  if(toggleCount==0){
    toggleCount++
    subMenuWrap.style.left='0%'
    subMenuWrap.style.opacity='1'
    subMenuWrap.style.transition='0.3s'
    console.log(toggleCount)
  } else {
    subMenuWrap.style.left='-100%'
    subMenuWrap.style.transition='0.3s'
    console.log(toggleCount)
    toggleCount=0
    
  }
})
console.log(toggleMenu, subMenuWrap)
}