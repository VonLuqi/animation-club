const intervalTime = 6500
const timeoutTime = 15000

const changeSlide = (direction, slider) => {
    if (!slider) return

    const property = slider.dataset.sliderProp || '--index'
    const dots = slider.querySelectorAll('.slider__dot')
    const items = slider.querySelectorAll('.slider__item')

    if (dots.length) {
        let indexAtual = [...dots].findIndex(dot => dot.checked)
        if (indexAtual < 0) indexAtual = 0

        const nextIndex = (indexAtual + direction + dots.length) % dots.length
        dots[nextIndex].checked = true
        slider.style.setProperty(property, nextIndex)
        return
    }

    if (!items.length) return

    let indexAtual = [...items].findIndex(item => item.classList.contains('active'))
    if (indexAtual < 0) indexAtual = 0

    items[indexAtual].classList.remove('active')

    const nextIndex = (indexAtual + direction + items.length) % items.length
    items[nextIndex].classList.add('active')
	
    slider.style.setProperty(property, nextIndex)
}

const initSlider = (slider) => {
    if (!slider) return

    const mode = slider.dataset.slider || ''
    const property = slider.dataset.sliderProp || '--index'
    const dots = slider.querySelectorAll('.slider__dot')
    const buttons = slider.querySelectorAll('.slider__btn')

    const startAuto = () => {
        clearInterval(slider._intervalId)
        slider._intervalId = setInterval(() => {
            changeSlide(1, slider)
        }, intervalTime)
    }

    const scheduleAuto = () => {
        clearInterval(slider._intervalId)
        clearTimeout(slider._timeoutId)

        slider._timeoutId = setTimeout(() => {
            startAuto()
        }, timeoutTime)
    }

    if (mode.includes('auto') && dots.length) {
        startAuto()
    }

    dots.forEach(dot => {
        dot.addEventListener('click', scheduleAuto)
        dot.addEventListener('change', (e) => {
            const indexActual = e.target.dataset.index
            slider.style.setProperty(property, indexActual)
        })
    })

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const root = e.currentTarget.closest('.slider')
            if (!root) return

            const role = e.currentTarget.dataset.sliderRole || e.currentTarget.dataset.side
            const direction = role === 'next' ? 1 : -1
            changeSlide(direction, root)
        })
    })
}

document.querySelectorAll('.slider').forEach(initSlider)