import './nav.css'
export function Navigations(e, props) {
	const navLinkName = ['Strona Główna', 'O nas', 'Kontakt'];
	const navLinkHref = ['/', '/about', '/contact'];
	const containerLinks = document.querySelector('#nav');

	for (let i = 0; i < navLinkName.length; i++) {
		const links = document.createElement('a');
		links.textContent = navLinkName[i];
		links.setAttribute('href', navLinkHref[i]);
		containerLinks.appendChild(links);
	}
}
