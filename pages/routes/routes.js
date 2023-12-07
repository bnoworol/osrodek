import { home } from '../home/home';
import { ogr } from '../about/about.js';
export function navRoute (e) {
const routes = {
        '/': `${home}`,
        '/about': `${ogr}`,
        '/contact': `FUCK!`,
    };
    
    const render = path => {
        document.querySelector('#app').innerHTML = routes[path] || `<h1>404</h1>${nav}`;
        document.querySelectorAll('[href^="/"]').forEach(el =>
            el.addEventListener('click', evt => {
                evt.preventDefault();
                const { pathname: path } = new URL(evt.target.href);
                window.history.pushState({ path }, path, path);
                render(path);
            })
        );
    };
    window.addEventListener('popstate', e => render(new URL(window.location.href).pathname));
    render('/');
}
