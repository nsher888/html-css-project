const modal = document.querySelector('.bg-modal');
const modalBtn = document.querySelector('.modalBtn');
const closeBtn = document.querySelector('.close');



const name = document.querySelector('#name')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const errorElement = document.querySelector('.error')
const overlay = document.getElementById('overlay');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', clickOutside);


function openModal() {
    modal.style.display = 'block';
    overlay.classList.add('active');
}

function closeModal() {
    modal.style.display = 'none';
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.classList.remove('active');
})


form.addEventListener('submit', (e) => {
    let messages = [];
    if(name.value === '' || password.value === ''){
        messages.push('All fields are required!')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})


