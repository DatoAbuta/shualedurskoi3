const bill = document.querySelector('.bill1')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const person = document.querySelector('.bill2')
const h2 = document.querySelector('.h2')
const h22 = document.querySelector('.h22')
const p = document.querySelector('p')
const nugo = document.querySelector('.nugo')
const number = document.querySelector('.number')
const nop = document.querySelector('.nop')
const nugzar = document.querySelector('.nugzar')
const reset = document.querySelector('.reset')
const custom = document.querySelector('.custom')
const buttons = document.querySelector('.buttons')
const gela = document.querySelector('.gela')
const noni = document.querySelector('#noni')
let result = 0
let percent = 0
let total = 0

btn1.addEventListener('click', () =>{
    percent = 0.05
    btn1.classList.add('colored')
    btn4.classList.remove('colored')
    btn3.classList.remove('colored')
    btn2.classList.remove('colored')
    btn5.classList.remove('colored')
})

btn2.addEventListener('click', () =>{
    percent = 0.1
    btn2.classList.add('colored')
    btn4.classList.remove('colored')
    btn3.classList.remove('colored')
    btn5.classList.remove('colored')
    btn1.classList.remove('colored')
})

btn3.addEventListener('click', () =>{
    percent = 0.15
    btn3.classList.add('colored')
    btn4.classList.remove('colored')
    btn5.classList.remove('colored')
    btn2.classList.remove('colored')
    btn1.classList.remove('colored')
})

btn4.addEventListener('click', () =>{
    percent = 0.25
    btn4.classList.add('colored')
    btn5.classList.remove('colored')
    btn3.classList.remove('colored')
    btn2.classList.remove('colored')
    btn1.classList.remove('colored')
})

btn5.addEventListener('click', () =>{
    percent = 0.5
    btn5.classList.add('colored')
    btn4.classList.remove('colored')
    btn3.classList.remove('colored')
    btn2.classList.remove('colored')
    btn1.classList.remove('colored')
})
custom.addEventListener('click', () => {
    btn4.classList.remove('colored')
    btn3.classList.remove('colored')
    btn2.classList.remove('colored')
    btn1.classList.remove('colored')
    btn5.classList.remove('colored')
})
custom.addEventListener('input', () =>{
    percent = custom.value / 100
})

person.addEventListener('input', () => {
    if(person.value > 0){
        result = (parseInt(bill.value) * percent) / person.value
        h2.innerHTML = `$ ${result.toFixed(2)}`
        p.innerHTML = ''
        nugo.classList.remove('cantbe')
        number.classList.remove('margin')
        nop.classList.remove('nopp')
    }
    else{
        p.innerHTML = "Can't Be Zero!"
        nugo.classList.toggle('cantbe')
        number.classList.toggle('margin')
        nop.classList.add('nopp')
        nugo.classList.remove('nugo:focus-within')
    }

    total = parseInt(bill.value / person.value) + result
    h22.innerHTML = `$ ${total}`
})

reset.addEventListener('click', () => {
    h2.innerHTML = '$0.00'
    h22.innerHTML = '$0.00'
    bill.value = ''
    person.value = ''
    custom.value = ''
})