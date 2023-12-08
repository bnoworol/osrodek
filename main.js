import './style.css';
import { navRoute } from './pages/routes/routes'
import { addedPost } from './pages/home/home';
import { Navigations } from './pages/Navigation/nav';
Navigations();
navRoute()
addedPost()
const btn = document.querySelector('[href="/"]')
btn.addEventListener('click', () => location.reload())
