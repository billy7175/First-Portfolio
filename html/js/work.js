const profile_moving_text = document.querySelectorAll('.profile-moving-text')


const work = document.querySelector('.work')
const about_height = work.clientHeight/5;
const about_profile = document.querySelector('.about-profile')
console.log(about_height)
/* each section top */ 
const about_top = work.offsetTop;
const about_profile_top = about_profile.offsetTop

const profile_info = document.querySelectorAll('.profile-info')
const splits = document.querySelectorAll('.split')
  
window.addEventListener('scroll',()=>{
  let scrollTop = window.scrollY
  let moving_text_scroll01 = scrollTop/5
  let moving_text_scroll02 = scrollTop/5-about_height
  let moving_text_scroll03 = scrollTop/5-350
  console.log('moving_text_scroll01:',moving_text_scroll01)




  if(scrollTop > about_top && scrollTop < about_top+600){
    profile_moving_text[0].style.transform='translateX('+moving_text_scroll01+'%)'
  }
  if(scrollTop > profile_info[0].offsetTop && scrollTop < profile_info[0].offsetTop+600){
    profile_moving_text[1].style.transform='translateX('+-moving_text_scroll02+'%)'
  }
  if(scrollTop > profile_info[1].offsetTop && scrollTop < profile_info[1].offsetTop+600){
    profile_moving_text[2].style.transform='translateX('+moving_text_scroll03+'%)'
  }
  if(scrollTop > profile_info[1].offsetTop+500 && scrollTop < profile_info[1].offsetTop+800){
    splits.forEach((split,index)=>{
      split.classList.add('split-undo')
    })
  } else {
    splits.forEach((split,index)=>{
      split.classList.remove('split-undo')
    })
  }
  
})


const profile_picture01 = document.querySelector('.profile-picture01')
console.log(profile_picture01)

// profile_picture01.addEventListener('mouseenter',(e)=>{
//   console.log(e.target.url)
// })