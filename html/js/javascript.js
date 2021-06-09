
const wrap = document.querySelector('#wrap')


/* 01~04 lists  */
const titles = document.querySelectorAll('.title')
const titleh2 = document.querySelectorAll('.titleTop')
const title04 = document.querySelector('.title04')
const line = document.querySelector('.background-line')
const sectionList = document.querySelectorAll('.sectionList')
const titleh2Height = titleh2[0].clientHeight/2;

console.log('titleh2:',titleh2[0].clientHeight)
console.log('line:',line)

let topArray = []



titles.forEach((title,index)=>{
  title.addEventListener('mouseenter',(e)=>{
    line.style.top=topArray[index]+titleh2Height+'px'
    titles[0].classList.remove('active')
    titles[1].classList.remove('active')
    titles[2].classList.remove('active')
    titles[3].classList.remove('active')
    // titles[4].classList.remove('active')
    console.log(title)
    e.target.classList.add('active')

    sectionList[0].classList.remove('active')
    sectionList[1].classList.remove('active')
    sectionList[2].classList.remove('active')
    sectionList[3].classList.remove('active')
    sectionList[index].classList.add('active')

    sectionList[0].classList.remove('perspective')
    sectionList[1].classList.remove('perspective')
    sectionList[2].classList.remove('perspective')
    sectionList[3].classList.remove('perspective')
    sectionList[index].classList.add('perspective')
  })
})

titleh2.forEach((titleh2,index)=>{
  topArray.push(titleh2.getBoundingClientRect().top)  
})

line.style.top=topArray[0]+titleh2Height+'px'
console.log('topArray:',topArray)







