








/* subMenu javascript */

var sectionTwoContent = document.querySelectorAll('.sectionTwoContent')
var sectionThreeIconBox = document.querySelectorAll('.sectionThreeIconBox')
var sectionFourContent = document.querySelectorAll('.sectionFourContent')
console.log(sectionFourContent)
window.addEventListener('scroll', function(){
  var scrollTop = window.scrollY 
  console.log(scrollTop)
  if(scrollTop > 300 ){
    sectionTwoContent.forEach((item,index)=> item.classList.add('fadeInBottom'))
  }

  if(scrollTop > 1300 ){
    sectionThreeIconBox.forEach((item,index)=> item.classList.add('fadeInLeft'))
  }

  if(scrollTop > 1900 ){
    sectionThreeIconBox.forEach((item,index)=> {
      sectionFourContent[0].classList.add('fadeInTop')
      sectionFourContent[1].classList.add('fadeInTop')
      sectionFourContent[2].classList.add('fadeInBottom')
      sectionFourContent[3].classList.add('fadeInBottom')
    })
  }


})//scroll

/* toggle Menu script */
const mainToggleBtn = document.querySelector('.mainToggleBtn')
const mainToggleMenu = document.querySelector('.mainToggleMenu')
toggleCount = 0;  
mainToggleBtn.addEventListener('click',function(){
  if(toggleCount==0){
    toggleCount++
    mainToggleMenu.style.left='0%'
    console.log(toggleCount)
  } else {
    mainToggleMenu.style.left='-100%'
    console.log(toggleCount)
    toggleCount=0
  }
})
console.log(mainToggleBtn)




