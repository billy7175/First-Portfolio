


const skillPercentage = document.querySelectorAll('.skillPercentage');
const skillCircle = document.querySelectorAll('.circle');
let skillFigures = ['90','95','85','80','35','10','960','AL'];
let skillDashOffsets = ['200','300','700','500','400','200']
console.log('skillFigures:',skillFigures)
console.log('skillDashOffsets:',skillDashOffsets)
console.log('skillPercentage:',skillPercentage)

// to fill the gauge of skillBox SVG
function fillGauge (){
	skillCircle.forEach((circle,index)=>{
		circle.style.strokeDashoffset='0'
		circle.style.transition='3s'
	})
	skillPercentage.forEach((percentage,index)=>{
		// percentage.innerHTML = skillFigures[index] + '%'//
	})
}


fillGauge();

console.log(skillPercentage)
console.log(skillCircle)