void async function () {
	//get the imported document in templates:
	const body = document.querySelector('body');

	const header = body.querySelector('header');
	const footer = body.querySelector('footer');
	const [header_html, footer_html] = await Promise.all([
		fetch('templates/header.html').then(d => d.text()),
		fetch('templates/footer.html').then(d => d.text()),
	]);
	header.innerHTML = header_html;
	footer.innerHTML = footer_html;
}();
