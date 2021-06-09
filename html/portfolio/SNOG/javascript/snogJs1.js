const good = document.querySelectorAll('.good');
	const goodBottom = document.querySelectorAll('.goodBottom');
	const sectionTwo = document.querySelector('.sectionTwo')
  const sectionTwoFood = document.querySelectorAll('.sectionTwoFood')
	const sectionTwoSauce = document.querySelector('.sectionTwoSauce')
	const sectionTwoSticker = document.querySelectorAll('.sectionTwoSticker')
	const sectionTwoIceCream = document.querySelector('.sectionTwoIceCream')
	const stick = document.querySelectorAll('.stick')
	const sectionTwoText = document.querySelectorAll('.sectionTwoText')
	const sectionThreeTextWrap = document.querySelector('.sectionThreeTextWrap')
	const sectionThree = document.querySelector('.sectionThree')
	const sectionFour = document.querySelector('.sectionFour')
	const sectionFive = document.querySelector('.sectionFive')
	const sectionSix = document.querySelector('.sectionSix')
	const sectionSeven = document.querySelector('.sectionSeven')
	const sectionEight = document.querySelector('.sectionEight')
	const sectionNine = document.querySelector('.sectionNine')
	const sectionTen = document.querySelector('.sectionTen')
	const sectionEleven = document.querySelector('.sectionEleven')
	const sectionTwelve = document.querySelector('.sectionTwelve')
	const sectionThirteen = document.querySelector('.sectionThirteen')
	const sectionFourteen = document.querySelector('.sectionFourteen')
	const lastSection = document.querySelector('.lastSection')
	const lastGood = document.querySelectorAll('.lastGood')

	console.log(lastGood);

	k=0;
	
	window.addEventListener('scroll',function(){
		let scrollTop = window.scrollY
		let scrollDown = (window.scrollY/4)-651
    let scrollDownSectionTwo = (window.scrollY/2)-3440
		let scrollDownTwo = (window.scrollY/3.5)-735
		let scrollDownThree = (window.scrollY/3)-851
		let scrollDownFour = (window.scrollY/2)-1251
    let scrollLeft = (window.scrollY/5)-1378
		let scrollUp = -(window.scrollY/4)+551
		let scrollReverse = (window.scrollY/2)-8500
		let scrollLeftReverse = (window.scrollY/2)-8500
		let lastScroll = (window.scrollY/40)-750
		
		console.log(scrollTop)
		
		/*if 조건 */
    if(scrollTop > 0 && scrollTop < 2400){
			good.forEach((item,index)=>{
        // item.style.transform='translate(-50%'+','+scrollDown+'px'+')';
				good[0].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[1].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[2].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[3].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[4].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[5].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[6].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[7].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[8].style.transform='translate(-50%'+','+scrollUp+'%'+')';
				good[9].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[10].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[11].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[12].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[13].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[14].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[15].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[16].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[17].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[18].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[19].style.transform='translate(-50%'+','+scrollDownFour+'%'+')';
				good[20].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[21].style.transform='translate(-50%'+','+scrollDownFour+'%'+')';
				good[22].style.transform='translate(-50%'+','+scrollDownFour+'%'+')';
				good[23].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[24].style.transform='translate(-50%'+','+scrollDown+'%'+')';
				good[25].style.transform='translate(-50%'+','+scrollDownTwo+'%'+')';
				good[26].style.transform='translate(-50%'+','+scrollDownThree+'%'+')';
				good[27].style.transform='translate(-50%'+','+scrollDownFour+'%'+')';
			})// forEach scroll:2400
		}// first if 
		
		/*section가 올라옵니다.*/
		if(scrollTop>4000){
			sectionTwo.style.top='0%'
			// sectionTwo.style.zIndex='1'
		}  else {
			sectionTwo.style.top='100%'
		}// second if


    if(scrollTop >4500 && scrollTop < 6900){
      sectionTwoFood.forEach((item,index)=>{
        // item.style.transform='translate(0%'+','+scrollDownSectionTwo+'%'+')';
        item.style.transform='translate('+scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
        sectionTwoFood[06].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
        sectionTwoFood[09].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
        sectionTwoFood[10].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
        sectionTwoFood[01].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
        sectionTwoFood[03].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
      })//forEach 
    }//sectionTwoFood scroll
		if(scrollTop > 8000){
			sectionTwoSauce.classList.add('active')
		} else {
      sectionTwoSauce.classList.remove('active')
		}// sauce If 
		if(scrollTop > 9000 && scrollTop <11500){
			console.log(sectionTwoSticker)
			stick.forEach((item,index)=>{
				stick[0].style.marginTop='0px'
				stick[1].style.marginTop='0px'
				stick[2].style.marginTop='0px'
				stick[0].style.opacity='1'
				stick[1].style.opacity='1'
				stick[2].style.opacity='1'
				// stick[1].classList.add('fadeInBottom')
				// stick[2].classList.add('fadeInRight')
			})
		} else {
        stick.forEach((item,index)=>{
				stick[0].style.marginTop='-200px'
				stick[1].style.marginTop='-200px'
				stick[2].style.marginTop='-200px'
				stick[0].style.opacity='0'
				stick[1].style.opacity='0'
				stick[2].style.opacity='0'
				// stick[1].classList.add('fadeInBottom')
				// stick[2].classList.add('fadeInRight')
			})
		} //if Sticker
		if(scrollTop > 12000){
			// console.log(sectionTwoText)
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[0].classList.add('active')
			})
			sectionTwoIceCream.style.border='25px solid gold'
		} else {
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[0].classList.remove('active')
			})
			sectionTwoIceCream.style.border='0px solid gold'
		} //text if 끝

		if(scrollTop > 13500){
			// console.log(sectionTwoText)
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[0].classList.remove('active')
				sectionTwoText[1].classList.add('active')
				
				// sectionTwoText[1].classList.add('active')
			})
		} else {
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[1].classList.remove('active')
				// sectionTwoText[1].classList.add('active')
			})
		} //text if 끝


		if(scrollTop > 15000){
			// console.log(sectionTwoText)
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[1].classList.remove('active')
				sectionTwoText[2].classList.add('active')
				
				// sectionTwoText[1].classList.add('active')
			})
		} else {
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[2].classList.remove('active')
				// sectionTwoText[1].classList.add('active')
			})
		} //text if 끝
    if(scrollTop > 16500){
			sectionTwoText.forEach((text,index)=>{
				sectionTwoText[2].classList.remove('active')
				sectionTwoIceCream.style.border='0px solid gold'
			})
		}//다 사라짐
		
		if(scrollTop > 17000 && scrollTop < 19400){
			sectionTwoFood.forEach((item,index)=>{
				item.style.transform='translate(0%'+','+-scrollReverse+'%'+')';
				// item.style.transform='translate('+scrollLeft+'%'+','+scrollReverse+'%'+')';
				// sectionTwoFood[06].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
				// sectionTwoFood[09].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
				// sectionTwoFood[10].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
				// sectionTwoFood[01].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
				// sectionTwoFood[03].style.transform='translate('+-scrollLeft+'%'+','+scrollDownSectionTwo+'%'+')';
			})
		} else {
		} //sectionTwoFood 위로 뿌이뿌이

		// sectionThree 올라옴
		if(scrollTop > 20000){
			sectionThree.style.top='0%'
			sectionThreeTextWrap.style.top='50%'
			console.log('123')
		} else {
			sectionThree.style.top='200%'
			sectionThreeTextWrap.style.top='200%'
		} //scrollTop 20000  

		if(scrollTop > 20800){
			sectionFour.style.top='0%'

		} else {
			sectionFour.style.top='300%'
		}

		if(scrollTop > 21600){
			sectionFive.style.top='0%'

		} else {
			sectionFive.style.top='400%'
		}

		if(scrollTop > 22400){
			sectionSix.style.top='0%'

		} else {
			sectionSix.style.top='500%'
		}

		if(scrollTop > 23200){
			sectionSeven.style.top='0%'

		} else {
			sectionSeven.style.top='600%'
		}

		if(scrollTop > 24000){
			sectionEight.style.top='0%'

		} else {
			sectionEight.style.top='700%'
		}

		if(scrollTop > 24800){
			sectionNine.style.top='0%'

		} else {
			sectionNine.style.top='800%'
		}

		if(scrollTop > 25600){
			sectionTen.style.top='0%'

		} else {
			sectionTen.style.top='900%'
		}

		if(scrollTop > 26400){
			sectionEleven.style.top='0%'

		} else {
			sectionEleven.style.top='1000%'
		}

		if(scrollTop > 27200){
			sectionTwelve.style.top='0%'

		} else {
			sectionTwelve.style.top='1100%'
		}

		if(scrollTop > 28000){
			sectionThirteen.style.top='0%'

		} else {
			sectionThirteen.style.top='1200%'
		}

		if(scrollTop > 28800){
			sectionFourteen.style.top='0%'

		} else {
			sectionFourteen.style.top='1300%'
		}

		if(scrollTop > 29600){
			sectionThreeTextWrap.style.top='200%'
			lastSection.style.top='0%'
		} else {
			lastSection.style.top='1400%'
		}

		
		if(scrollTop > 30000 && scrollTop < 32000){
			k++
			console.log(k/10)
			lastGood.forEach((good,index)=>{
				good.style.top=lastScroll+'%'
			})
		}


	})

