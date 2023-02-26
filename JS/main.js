const item = document.querySelector(".item");
const block = document.querySelector(".div");

block.addEventListener('mousemove', (ev) => {
item.style.position = 'absolute';
item.style.left = ev.pageX + -50 + 'px';
item.style.top = ev.pageY + -50 + 'px';
})