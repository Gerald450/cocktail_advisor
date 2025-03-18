let btn = document.getElementsByClassName('btn-submit')[1];
let modal = document.getElementsByClassName('pop-up')[0];
let container = document.getElementById('container');



btn.addEventListener('click', (e) =>{
        container.style.display = 'none'
        modal.classList.remove('pop-up');
        modal.classList.add('container');
        modal.classList.add('pop-up-after');
    })


