let image = document.querySelector('img');
let no = document.querySelector('.no')


no.style.display = 'none';

image.onclick = () => {
  image.style.display = 'none';
  no.style.display = 'block';
}




let image1 = document.querySelector('.steady')
let image2 = document.querySelector('.soQuick')

image1.onmouseenter = (e) => {
e.target.classList.remove('steady')
e.target.classList.add('soQuick')
   // write some instruction here
};

image2.onmouseenter = (e) => {
e.target.classList.remove('.soQuick')
e.target.classList.add('steady')
   // write some instruction here
};
