
const sectionOne = document.querySelector('.sectionOne')
const sectionTwo = document.querySelector('.sectionTwo')
const sectionTwoRightMovingImage = document.querySelector('.sectionTwoRightMovingImage')
const sectionThree = document.querySelector('.sectionThree')
const sectionThreeSmallImage = document.querySelector('.sectionThreeSmallImage')
const sectionFourLeft = document.querySelector('.sectionFourLeft')
const sectionFourRight = document.querySelector('.sectionFourRight')
const sectionSixInfoBox = document.querySelector('.sectionSixInfoBox')
const sectionSixGauge = document.querySelectorAll('.sectionSixGauge')

sectionOne.classList.add('fadeInLeft')
console.log(sectionTwoRightMovingImage)
const sectionFiveRightBox = document.querySelectorAll('.sectionFiveRightBox')
console.log(sectionFiveRightBox)
let k = 0;
window.addEventListener('scroll',function(){
  let scrollTop = window.scrollY
  let scrollTopSpeed = (scrollTop-2800)/3
  let scrollTopSpeedTwo = (scrollTop-1820)/1.
  let scrollTopSpeedThree = (scrollTop-1000)/3
  console.log(scrollTop)
  if(scrollTop >100){
     sectionTwo.classList.add('fadeInBottom')
  }
  if(scrollTop>200 && scrollTop<600){
    sectionTwoRightMovingImage.style.top=-scrollTopSpeedThree+'px'
  }
  if(scrollTop > 1200){
    sectionThree.classList.add('fadeInBottom')
  }
  if(scrollTop>1600 && scrollTop < 1900){
    sectionThreeSmallImage.style.top=-scrollTopSpeedTwo+'px'
    console.log('1400')
  }
  if(scrollTop>2100){
    sectionFourLeft.classList.add('fadeInLeft')
    sectionFourRight.classList.add('fadeInRight')
  }
 
  // if(scrollTop>2800 && scrollTop <3250){
  //   k++
  //   console.log(scrollTopSpeed)
  //   console.log('k:',k)
  //   sectionFiveRightBox.forEach((item,index)=>{
  //     sectionFiveRightBox[1].style.left=-scrollTopSpeed+'px'
  //     sectionFiveRightBox[2].style.left=-(scrollTopSpeed/1.5)+'px'
  //     console.log('123')
  //     // sectionFiveRightBox[2].style.left='-scrollTop'+'px'
  //   })
  // }//scroll2800
  if(scrollTop>3600){
    sectionSixInfoBox.classList.add('fadeInBottom')
  }
  if(scrollTop>4300 && scrollTop<6000){
    sectionSixGauge[0].style.width='20%'
    sectionSixGauge[1].style.width='100%'
    sectionSixGauge[2].style.width='60%'
    sectionSixGauge[3].style.width='50%'
    sectionSixGauge[4].style.width='67%'
  } else {
    sectionSixGauge[0].style.width='0%'
    sectionSixGauge[1].style.width='0%'
    sectionSixGauge[2].style.width='0%'
    sectionSixGauge[3].style.width='0%'
    sectionSixGauge[4].style.width='0%'
  }
})



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