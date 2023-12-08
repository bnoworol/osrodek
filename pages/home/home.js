import './home.css';
import header1 from '../../src/header2.jpg';
export const home = `<div class="header">
<img class="header__logo" src="http://osrodek.lzs.info.pl/wp-content/uploads/2017/08/logo_osrodek.png" alt="logo LZS OŚRODEK">
<h1 class="header__text">Ośrodek Jagna LZS w Nowej Bystrzycy</h1>
</div>
`;
export const posts = `<div class="posts"></div>`;

export function addedPost() {
	const testosteron = ['lecimy', 'w', 'chuj','jasne'];
  const apps = document.querySelector('.posts')
	for (let i = 0; i < testosteron.length; i++) {
    const post = document.createElement('div')
    post.innerHTML = `
    <div class="post">
    <img src="${header1}" alt="" class="post_thumbnail">
    <div class="post_content">
    <h2 class="post_title">${testosteron[i]}</h2>
    <p class="post_content_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo ipsam quasi, repellendus eos nobis maxime quo, quas quam ab itaque placeat quibusdam enim quae cumque? Totam officia omnis veniam corrupti in! Deleniti, eius corrupti illum nobis saepe pariatur porro natus quidem, est cumque ratione consequatur perferendis voluptatem laudantium reprehenderit!</p>
    </div>
    </div>`;
    apps.appendChild(post)
  }
  
}

