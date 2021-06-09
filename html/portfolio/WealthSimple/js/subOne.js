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






const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const slider = document.querySelector('.slider')
console.log(prevBtn, nextBtn, slider)
let slideCount = 0

nextBtn.addEventListener('click',function(e){
  e.preventDefault();
  if(slideCount==0){
    
    slider.style.marginLeft='-33%'
    slider.style.transition='0.3s'
    console.log(slideCount)
    slideCount = 1
  } else {
    
  }
})

prevBtn.addEventListener('click',function(e){
  e.preventDefault();
  if(slideCount==1){
    
    console.log(slideCount)
    slider.style.marginLeft='0%'
    slider.style.transition='0.3s'
    slideCount = 0;
  }
})





/* sectionSix btn part */

const sectionSixBtns = document.querySelectorAll('.sectionSixBtns a')
const tabWrap = document.querySelectorAll('.tabWrap')
console.log(tabWrap)

// for(let i=0; i<$('.sectionSixBtns > a').length; i++){
//   $('.sectionSixBtns > a').click(function(e){
//     e.preventDefault();
//     let index = $(this).index()
//     console.log(index)
//     $('.sectionSixBtns > a').removeClass('active')
//     $('.sectionSixBtns > a').eq(index).addClass('active')
//     $('.tabWrap').removeClass('active')
//     $('.tabWrap').eq(index).addClass('active')
//   })
// }

sectionSixBtns.forEach((button,index)=>{
  button.addEventListener('click',function(e){
    e.preventDefault();
    sectionSixBtns[0].classList.remove('active')
    sectionSixBtns[1].classList.remove('active')
    sectionSixBtns[2].classList.remove('active')
    e.target.classList.add('active')
    tabWrap[0].classList.remove('active')
    tabWrap[1].classList.remove('active')
    tabWrap[2].classList.remove('active')
    tabWrap[index].classList.add('active')
  })
})



const submit = document.querySelector('.submit')
const inputEmail = document.querySelector('.inputEmail')
const inputPassword = document.querySelector('.inputPassword')
console.log(inputPassword)

submit.addEventListener('click', function(e){
  e.preventDefault();
  let idText = inputEmail.value;
  let passwordText = inputPassword.value;
  let store = localStorage.setItem('idText:',12321)
  console.log(store)
  
  window.open("","","width=400, height=400, left=30%")
});

/* subMenu */
const subMenu = document.querySelector('.subMenuWrap');
console.log(subMenu);