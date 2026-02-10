const isInPages = location.pathname.includes('/pages/')
const base = isInPages ? '../' : './'

const modulars = {
	header: `<h1 class="site-title">
    <a href="${base}index.html" class="logo-link">
        <img src="${base}assets/images/logos/logo-typo.png" alt="Animation Club" class="logo" />
        <span class="sr-only">Animation Club</span>
    </a>
</h1>
`.trim(),
	aside: `<div class="open_nav">
	<input type="checkbox" id="open_nav_check" />
	<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0.310547 1.659C1.03672 0.177192 2.80347 -0.423544 4.25586 0.3172L62.8955 30.2313C64.3677 30.9823 64.3677 33.0164 62.8955 33.7674L4.25586 63.6824C2.80349 64.4231 1.0367 63.8224 0.310547 62.3406C0.0990037 61.9089 0.00241919 61.4498 0.00292969 60.9979L0 60.9998V2.99982H0.00292969C0.00265609 2.54849 0.0993497 2.09012 0.310547 1.659Z"
		/>
	</svg>
</div>
<div class="container_aside_nav">
	<div class="logo-aside">
		<img src="${base}assets/images/logos/logo-img.png" alt="" />
	</div>
	<ul class="container_nav">
		<li class="wrapper_item selected">
			<a href="${base}index.html">
				<svg viewBox="0 0 94 94" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M44.1944 1.10022C45.7716 -0.36675 48.2286 -0.366759 49.8057 1.10022L92.6973 40.9957C95.4067 43.5161 93.6071 48.024 89.8917 48.024H78.7452C78.1929 48.0241 77.7452 48.4718 77.7452 49.024V85.8717C77.7451 90.2204 74.3006 93.771 69.9688 93.9889L69.547 94.0006H24.4532L24.0303 93.9889C19.8387 93.7778 16.4776 90.4463 16.2647 86.2906L16.254 85.8717V49.024C16.254 48.4718 15.8063 48.024 15.254 48.024H4.10847L3.76472 48.0114C0.284118 47.7443 -1.32176 43.4373 1.30281 40.9957L44.1944 1.10022Z"
					/>
				</svg>
				<span>Home</span>
				<div class="selected_badge">
					<p>selected</p>
				</div>
			</a>
		</li>
		<li class="wrapper_item">
			<a href="${base}pages/dicas.html">
				<svg viewBox="0 0 94 94" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M44.1944 1.10022C45.7716 -0.36675 48.2286 -0.366759 49.8057 1.10022L92.6973 40.9957C95.4067 43.5161 93.6071 48.024 89.8917 48.024H78.7452C78.1929 48.0241 77.7452 48.4718 77.7452 49.024V85.8717C77.7451 90.2204 74.3006 93.771 69.9688 93.9889L69.547 94.0006H24.4532L24.0303 93.9889C19.8387 93.7778 16.4776 90.4463 16.2647 86.2906L16.254 85.8717V49.024C16.254 48.4718 15.8063 48.024 15.254 48.024H4.10847L3.76472 48.0114C0.284118 47.7443 -1.32176 43.4373 1.30281 40.9957L44.1944 1.10022Z"
					/>
				</svg>
				<span>Dicas</span>
				<div class="selected_badge">
					<p>selected</p>
				</div>
			</a>
		</li>
		<li class="wrapper_item">
			<a href="${base}pages/tecnicas.html">
				<svg viewBox="0 0 94 94" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M44.1944 1.10022C45.7716 -0.36675 48.2286 -0.366759 49.8057 1.10022L92.6973 40.9957C95.4067 43.5161 93.6071 48.024 89.8917 48.024H78.7452C78.1929 48.0241 77.7452 48.4718 77.7452 49.024V85.8717C77.7451 90.2204 74.3006 93.771 69.9688 93.9889L69.547 94.0006H24.4532L24.0303 93.9889C19.8387 93.7778 16.4776 90.4463 16.2647 86.2906L16.254 85.8717V49.024C16.254 48.4718 15.8063 48.024 15.254 48.024H4.10847L3.76472 48.0114C0.284118 47.7443 -1.32176 43.4373 1.30281 40.9957L44.1944 1.10022Z"
					/>
				</svg>
				<span>Técnicas</span>
				<div class="selected_badge">
					<p>selected</p>
				</div>
			</a>
		</li>
		<li class="wrapper_item">
			<a href="${base}pages/materiais.html">
				<svg viewBox="0 0 94 94" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M44.1944 1.10022C45.7716 -0.36675 48.2286 -0.366759 49.8057 1.10022L92.6973 40.9957C95.4067 43.5161 93.6071 48.024 89.8917 48.024H78.7452C78.1929 48.0241 77.7452 48.4718 77.7452 49.024V85.8717C77.7451 90.2204 74.3006 93.771 69.9688 93.9889L69.547 94.0006H24.4532L24.0303 93.9889C19.8387 93.7778 16.4776 90.4463 16.2647 86.2906L16.254 85.8717V49.024C16.254 48.4718 15.8063 48.024 15.254 48.024H4.10847L3.76472 48.0114C0.284118 47.7443 -1.32176 43.4373 1.30281 40.9957L44.1944 1.10022Z"
					/>
				</svg>
				<span>Materiais</span>
				<div class="selected_badge">
					<p>selected</p>
				</div>
			</a>
		</li>
		<li class="wrapper_item">
			<a href="${base}pages/regras-do-club.html">
				<svg viewBox="0 0 94 94" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M44.1944 1.10022C45.7716 -0.36675 48.2286 -0.366759 49.8057 1.10022L92.6973 40.9957C95.4067 43.5161 93.6071 48.024 89.8917 48.024H78.7452C78.1929 48.0241 77.7452 48.4718 77.7452 49.024V85.8717C77.7451 90.2204 74.3006 93.771 69.9688 93.9889L69.547 94.0006H24.4532L24.0303 93.9889C19.8387 93.7778 16.4776 90.4463 16.2647 86.2906L16.254 85.8717V49.024C16.254 48.4718 15.8063 48.024 15.254 48.024H4.10847L3.76472 48.0114C0.284118 47.7443 -1.32176 43.4373 1.30281 40.9957L44.1944 1.10022Z"
					/>
				</svg>
				<span>Regras do Club</span>
				<div class="selected_badge">
					<p>selected</p>
				</div>
			</a>
		</li>
	</ul>
</div>
`.trim(),
	footer: `<div class="footer-contato">
				<a href="">
					<div class="wrapper_contato">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
							/>
						</svg>
						<span>(34) 9 8413-6268</span>
					</div>
				</a>
				<a href="">
					<div class="wrapper_contato">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
							/>
						</svg>
						<span>@vonluqi</span>
					</div>
				</a>
			</div>
			<div class="footer-map">
				<p>
					Endereço:
					<span>Rua Carlos Rodrigues de Melo, Cond. Villagio Park, N 240.</span>
				</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.537619354149!2d-46.96938781267014!3d-19.604300381081448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0376c4bb07371%3A0x72494e0994729bb2!2sR.%20Carlos%20Rodrigues%20de%20Melo%2C%20240%20-%20Conj.%20Hab.%20Boa%20Vista%2C%20Arax%C3%A1%20-%20MG%2C%2038184-570!5e0!3m2!1spt-BR!2sbr!4v1770676102364!5m2!1spt-BR!2sbr"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div class="credito">Made by <span>Luqi</span></div>`.trim(),
}

document.addEventListener('DOMContentLoaded', () => {
	for (const [selector, html] of Object.entries(modulars)) {
		const el = document.querySelector(selector)
		if (!el) continue
		el.innerHTML = html
	}

	document.querySelector('.selected')?.classList.remove('selected')

	const page = location.pathname.split('/').pop() || 'index.html'
	let name = window.functions.text_format(page.replace('.html', ''))

	if (name === 'index') name = 'home'

	const wrapperItems = document.querySelectorAll('.wrapper_item')

	const actualPage = [...wrapperItems].find(
		(item) => window.functions.text_format(item.querySelector('a span')?.textContent) === name
	)
	if (actualPage) actualPage.classList.add('selected')
})
