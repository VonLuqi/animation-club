const radios = document.querySelectorAll('.hero-slider-radio')

const change_slide = (aux = 1) => {
  const indexAtual = [...radios].findIndex(radio => radio.checked)

  const nextIndex = (indexAtual + aux + radios.length) % radios.length

  radios[nextIndex].checked = true
  document.querySelector('.hero_slider_container').style.setProperty('--index-slide', nextIndex)
}

const intervalTime = 6500
let interval = setInterval(change_slide, intervalTime)

const timeoutTime = 15000
let timeout = null

const call_timeout = () => {
  clearInterval(interval)
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    interval = setInterval(change_slide, intervalTime)
  },timeoutTime)
}

radios.forEach(radio => {
  radio.addEventListener('click', () => call_timeout())

  radio.addEventListener('change', (e) => {
    const indexActual = e.target.dataset.index

    document.querySelector('.hero_slider_container').style.setProperty('--index-slide', indexActual)
  })
})