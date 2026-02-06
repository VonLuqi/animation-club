const radios = document.querySelectorAll('.hero-slider-radio')
const setas = document.querySelectorAll('.seta')

const change_slide = (aux = 1, slider = null, norm = null, property = null, type = null) => {
  if (!slider || !norm || !property || !type) return

  let indexAtual = 0
  let slide = null

  if (type === 'radio') {
    indexAtual = [...radios].findIndex(radio => radio.checked)
  } else {
    slide = slider.querySelectorAll('.wrapper_depoimento') 
    indexAtual = [...slide].findIndex(s => s.classList.contains('active'))
    slide[indexAtual].classList.remove('active')
  }

  const nextIndex = (indexAtual + aux + norm) % norm

  if (slide && nextIndex < slide.length) slide[nextIndex].classList.add('active')

  if (type === 'radio') radios[nextIndex].checked = true
  slider.style.setProperty(`${property}`, nextIndex)
}

const intervalTime = 6500
let interval = setInterval(() => {change_slide(1, document.querySelector('.hero_slider_container'), radios.length, '--index-slide', 'radio')}, intervalTime)

const timeoutTime = 15000
let timeout = null

const call_timeout = () => {
  clearInterval(interval)
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    interval = setInterval(() => {change_slide(1, document.querySelector('.hero_slider_container'), radios.length, '--index-slide', 'radio')}, intervalTime)
  },timeoutTime)
}

radios.forEach(radio => {
  radio.addEventListener('click', () => call_timeout())

  radio.addEventListener('change', (e) => {
    const indexActual = e.target.dataset.index

    document.querySelector('.hero_slider_container').style.setProperty('--index-slide', indexActual)
  })
})

setas.forEach(seta => {
  seta.addEventListener('click', (e) => {
    const side = e.currentTarget.dataset.side === 'next' ? 1 : -1
    console.log(`side: ${side}`)
    const slider = document.querySelector('.depoimentos')
    const norm = slider.querySelectorAll('.wrapper_depoimento').length

    change_slide(side, slider, norm, '--index-depoimento', 'seta')
  })
})
