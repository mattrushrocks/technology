const btnElement = document.querySelector('#hamburger')
const navElement = document.querySelector('#primaryNav')

btnElement.addEventListener('click', () =>{
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')

})//end button click 