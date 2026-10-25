const toggle = document.querySelector('.menu-toggle');
 const links = document.querySelector('#nav-links');

 toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
 });

 links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
 });

 const lightbox = document.querySelector('#lightbox');
 const lightboxImg = lightbox.querySelector('img');

 document.querySelectorAll('.gallery-grid img').forEach((img)=> {
   img.addEventListener('click', () => {
      lightboxImg.src = img.scr;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;

   });
});

lightbox.addEventListener('click', () => {
   lightbox.hidden = true;
});

document.addEventListener('keydown', (e) => {
   if(e.key === 'Escape') lightbox.hidden = true;
});