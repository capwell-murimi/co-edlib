const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const laptop = document.querySelector('.laptop');
const headline = document.querySelector('.headline');


const tl = new TimeLineMax();

tl.fromTo(hero, 1, {height: "0%"},{height: "80%", ease: power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width:'0%',ease: power2.easeInOut})