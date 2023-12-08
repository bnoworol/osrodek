import { home, posts } from '../home/home';
import { ogr } from '../about/about.js';
import { danger } from '../error/error.js';
export function navRoute(e) {
	const routes = {
		'/': `${home}${posts}`,
		'/about': `${ogr}${home}`,
		'/contact': `FUCK!`,
	};
	const render = path => {
		document.querySelector('#app').innerHTML = routes[path] || `${danger}`;
		document.querySelectorAll('[href^="/"]').forEach(el =>
			el.addEventListener('click', evt => {
				evt.preventDefault();
				const { pathname: path } = new URL(evt.target.href);
				window.history.pushState({ path }, path, path);
				render(path);
			})
		);
		const event = document.querySelector('[href^="/"]')
		
	};
	window.addEventListener('popstate', e => render(new URL(window.location.href).pathname));
	render('/');
}
