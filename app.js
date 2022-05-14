const number = document.querySelectorAll('.number');
const num = document.querySelector('.num');
const submit = document.querySelector('.submit')
const second_container = document.querySelector('.second--container')

submit.addEventListener('click', () => {
      second_container.classList.add('slide')
})

number.forEach((numbers) => {
      numbers.addEventListener('click', () => {
            num.innerHTML = numbers.innerHTML
      })
})