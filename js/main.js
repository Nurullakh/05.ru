let timer = document.querySelectorAll('.timer__item .timer__number')
let countDownDate = new Date("06/12/2020 00:00:00").getTime()

let countDownFundton = setInterval(function() {
	let now = new Date().getTime()

	let distance = countDownDate - now
	timer[0].innerHTML = addZero(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
	timer[1].innerHTML = addZero(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)))
	timer[2].innerHTML = addZero(Math.floor(distance % (1000 * 60) / 1000))

	if (distance < 0) {
		timer[0].innerHTML = '00'
		timer[1].innerHTML = '00'
		timer[2].innerHTML = '00'
		clearInterval(countDownFundton)
	}
}, 1000)

function addZero(n) {
    return (n < 10 ? '0' : '') + n;
}

// modal

let modal = document.querySelector('.modal')
	modalWindow = modal.querySelector('.modal__window')
	close = document.querySelectorAll('.close__link')
	btnTrue = modal.querySelector('.modal__btn--true')
	btnFalse = modal.querySelector('.modal__btn--false')
	city = document.querySelector('.header__link-city')

modal.addEventListener('click', function(e) {
	e.preventDefault()
	if (e.target === modal || e.target === close[0]) {
		modal.classList.remove('modal--active')
	}
	if (e.target === btnTrue) {
		modal.classList.remove('modal--active')
		city.innerHTML = 'Махачкала'
	} else if (e.target === btnFalse) {
		modal.classList.remove('modal--active')
		city.innerHTML = 'Ваш город'
	}
})



// modalCity

let modalCity = document.querySelector('.modal-city')
	modalCityItem= modalCity.querySelectorAll('.modal-city__item')
	modalCityLink = modalCity.querySelectorAll('.modal-city__link')
	headerCity = document.querySelector('.header__choose-city')

headerCity.addEventListener('click', (e) => {
	e.preventDefault()
	modalCity.classList.add('modal-city--active')
})

modalCity.addEventListener('click', function(e) {
	e.preventDefault()
	if (e.target === modalCity || e.target === close[1]) {
		modalCity.classList.remove('modal-city--active')
	}
	modalCityLink.forEach(el => {
		if (e.target === el || e.target === el.parentNode) {
			city.innerHTML = el.innerHTML
			modalCity.classList.remove('modal-city--active')
		}
	})
})

// searchInput

let searchInput = document.querySelector('.search__input')
	seaarButtom = document.querySelector('.search__buttom')
let keywordsSearch = ['i', 'с', 'а', 'a', 'p', 'm']
searchInput.addEventListener('input', (e) => {
	keywordsSearch.forEach(key => {
		let reg = key.match(e.target.value.toLowerCase())
		if (reg !== null) {
			if (reg[0].length) {
				seaarButtom.classList.add('search__buttom--active')
			}
		}
	})
	if (e.target.value.length === 0) {
		seaarButtom.classList.remove('search__buttom--active')
	}
})

// productBtns

let cardCount = document.querySelector('.user-panel__count')
let toCardCount = 0

let productBtns = document.querySelectorAll('#toСard')
productBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		e.target.classList.add('product-card__btn--active')
		e.target.innerHTML = 'В корзине'
		toCardCount++
		if (toCardCount) {
			cardCount.innerHTML = toCardCount
			cardCount.classList.add('user-panel__count--active')
		}
	})
})