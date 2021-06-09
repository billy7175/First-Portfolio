const titles = document.querySelectorAll('.title')
const titleh2 = document.querySelectorAll('.titleTop')
const title04 = document.querySelector('.title04')
const line = document.querySelector('.background-line')
const background = document.querySelectorAll('.background')
const titleh2Height = titleh2[0].clientHeight/2;


console.log('titleh2:',titleh2[0].clientHeight)
console.log(background)
console.log('line:',line)

let topArray = []



titles.forEach((title,index)=>{
	title.addEventListener('mouseenter',(e)=>{
		line.style.top=topArray[index]+titleh2Height+'px'
		titles[0].classList.remove('active')
		titles[1].classList.remove('active')
		titles[2].classList.remove('active')
		titles[3].classList.remove('active')
		titles[4].classList.remove('active')
		console.log(title)
		e.target.classList.add('active')

		background[0].classList.remove('active')
		background[1].classList.remove('active')
		background[2].classList.remove('active')
		background[3].classList.remove('active')
		background[4].classList.remove('active')

		background[index].classList.add('active')




	})
})

titleh2.forEach((titleh2,index)=>{
	topArray.push(titleh2.getBoundingClientRect().top)  
})

line.style.top=topArray[0]+titleh2Height+'px'
console.log('topArray:',topArray)

