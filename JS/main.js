let item = document.querySelector(".item");
let block = document.querySelector(".div");

block.onmousemove = (ev) => {
item.style.position = 'absolute';
item.style.left = ev.pageX + -50 + 'px';
item.style.top = ev.pageY + -50 + 'px';
}