const arrowBtns = document.querySelectorAll('.arrow-btn')
const subArrowBtns = document.querySelectorAll('.sub_arrow-btn')

const open_dica = (
	e,
	_container,
	wrapper,
	cls,
	scopeSelector,
	nestedSelector,
	nestedOpenClass,
) => {
	const container = e.currentTarget.closest(_container)
	const content = container?.querySelector(wrapper)
	if (!content) return

	const scopeRoot = scopeSelector
		? e.currentTarget.closest(scopeSelector)
		: document

	scopeRoot?.querySelectorAll(`${wrapper}.${cls}`).forEach((el) => {
		if (el === content) return

		el.classList.remove(cls)

		if (!nestedSelector && !nestedOpenClass) return
		
		el.querySelectorAll(`${nestedSelector}.${nestedOpenClass}`).forEach(
			(nested) => nested.classList.remove(nestedOpenClass),
		)
	})

	const isOpen = content.classList.toggle(cls)

	if (!isOpen && nestedSelector && nestedOpenClass) {
		content
			.querySelectorAll(`${nestedSelector}.${nestedOpenClass}`)
			.forEach((nested) => nested.classList.remove(nestedOpenClass))
	}

	return { container, content, isOpen }
}

arrowBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		open_dica(
			e,
			'.faq_container',
			'.faq_content_wrapper',
			'is-open',
			'.wrapper_card_dica',
			'.sub_faq_content_wrapper',
			'is-open-sub',
		)
	})
})

subArrowBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		open_dica(
			e,
			'.sub_faq_wrapper_card',
			'.sub_faq_content_wrapper',
			'is-open-sub',
			'.sub_faq_container',
		)
	})
})
