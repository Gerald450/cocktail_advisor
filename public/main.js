let btn1 = document.getElementsByClassName('btn-submit')[2];
let btn = document.getElementsByClassName('btn-submit')[0];
let modal = document.getElementsByClassName('pop-up')[0];
let container = document.getElementById('container');
let container2 = document.getElementsByClassName('container2')[0]
let instructions = document.getElementsByClassName('btn-submit-2')[1];


btn1.addEventListener('click', (e) =>{

        container.style.display = 'none'
        modal.classList.remove('pop-up');
        modal.classList.add('container2');
        modal.classList.add('pop-up-after');
       
    })

let modal2 = document.getElementsByClassName('pop-up2');

instructions.addEventListener('click', () => {
        container2.style.display = 'none'
        modal.classList.remove('pop-up2');
        modal.classList.add('container2');
        modal.classList.add('pop-up-after');
})




