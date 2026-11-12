const leftmenu = document.getElementById('left-menu-id');
const leftmenubtn = document.getElementById('btn-left-menu-id');
const closelmb = document.getElementById('close-l-m-b');
leftmenubtn.addEventListener('click', function() {
    leftmenu.classList.add('open');
closelmb.addEventListener('click', function() {
    leftmenu.classList.remove('open');
})});