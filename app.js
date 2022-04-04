// --- SELECT ---
const textDiv = document.querySelector('.text')
const btn = document.querySelectorAll('.btn')
const clear_btn =  document.querySelector('.clear')
const delete_btn =  document.querySelector('.delete')
const modul_btn =  document.querySelector('.modul')
const divide_btn =  document.querySelector('.divide')
const sinus = document.querySelector('.sin')
const cosinus = document.querySelector('.cos')
const square_root = document.querySelector('.sqrt-root')
const subtraction = document.querySelector('.subtraction')
const multiplication_btn =  document.querySelector('.multiplication')
const adition_btn =  document.querySelector('.adition')
const negative_btn =  document.querySelector('.negative')
const point_btn =  document.querySelector('.point')
const equal_btn = document.querySelector('.equal')
const bracket_left =  document.querySelector('.bracket-left')
const bracket_right =  document.querySelector('.bracket-right')
const log_btn =  document.querySelector('.log')
const square =  document.querySelector('.sqrt')
const cube =  document.querySelector('.cube')

// --- EVENTS ---
btn.forEach(btn => btn.addEventListener('click', btn_function))
clear_btn.addEventListener('click', clearAll)
delete_btn.addEventListener('click', deleteFunction)
modul_btn.addEventListener('click', modulFunction)
divide_btn.addEventListener('click', divideFunction)
sinus.addEventListener('click', sinFunction)
cosinus.addEventListener('click', cosFunction)
square_root.addEventListener('click', sqrt_rootFunction)
subtraction.addEventListener('click', subtractionFunction)
multiplication_btn.addEventListener('click', multiFunction)
adition_btn.addEventListener('click', aditionFunction)
negative_btn.addEventListener('click', negativeFunction)
log_btn.addEventListener('click', log_function) 
square.addEventListener('click', sqrtFunction)
cube.addEventListener('click', cubeFunction)
bracket_left.addEventListener('click', bracket_left_function)
bracket_right.addEventListener('click', bracket_right_function)
point_btn.addEventListener('click', pointFunction)
equal_btn.addEventListener('click', equalFunction)

// --- FUNCTIONS ---
function x(){
    return textDiv.textContent
}

function btn_function(e){
    let e_btn = e.target.textContent
    if(textDiv.textContent === '0' || x() === 'NaN' || x() === '-Infinity' || x() === 'Infinity'){
        textDiv.textContent = e_btn
    } else{
        textDiv.textContent += e_btn
    }
}

function clearAll(){
    textDiv.textContent = 0
}

function deleteFunction(){
    if(x() === 'NaN' || x() === '-Infinity' || x() === 'Infinity'){
        textDiv.textContent = 0
    }
    if(x().length != 1){
        textDiv.textContent = x().substring(0, x().length - 1)
    } else{
        textDiv.textContent = 0
    }
}

function bracket_left_function(){
    let arr = []
    if(x() == 0 && x().length == 1){
        textDiv.textContent = ''
    }
    if(x()[x().length-1] !== ')' && x()[x().length-1] !== '.' && !x().includes('(((') && x()[x().length-1] !== '0' && x()[x().length-1] !== '1' && x()[x().length-1] !== '2' && x()[x().length-1] !== '3' && x()[x().length-1] !== '4' && x()[x().length-1] !== '5' && x()[x().length-1] !== '6' && x()[x().length-1] !== '7' && x()[x().length-1] !== '8' && x()[x().length-1] !== '9'){
        textDiv.textContent += '('
    }
}

function bracket_right_function(){
    if(x().includes('(') && !x().includes('))') && x()[x().length-1] !== '.' && x()[x().length-1] !== '(' && x()[x().length-1] !== '/' && x()[x().length-1] !== '%' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += ')'
    }
}

function modulFunction(){
    const mod = '%'
    if(!x().includes(mod) && x()[x().length-1] !== '.' && x()[x().length-1] !== '/' && x()[x().length-1] !== '+' && x()[x().length-1] !== '*'){
        textDiv.textContent += mod
    }
}

function divideFunction(){
    if(x()[x().length-1] !== '/' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '/'
    }
}

function sinFunction(){
    textDiv.textContent = Math.sin(textDiv.textContent)
}

function cosFunction(){
    textDiv.textContent = Math.cos(textDiv.textContent)
}

function log_function(){
    textDiv.textContent = Math.log(textDiv.textContent)
}

function sqrt_rootFunction(){
    textDiv.textContent = Math.sqrt(textDiv.textContent)
}

function sqrtFunction(){
    textDiv.textContent = Math.pow(textDiv.textContent, 2)
}

function cubeFunction(){
    textDiv.textContent = Math.pow(textDiv.textContent, 3)
}

function subtractionFunction(){
    if(x()[x().length-1] !== '-' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '-'
    }
}

function multiFunction(){
    if(x()[x().length-1] !== '*' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '-' && x()[x().length-1] !== '+'){
        textDiv.textContent += '*'
    }
}

function aditionFunction(){
    if(x()[x().length-1] !== '+' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*'){
        textDiv.textContent += '+'
    }
}

function negativeFunction(){
    if(x() == 0 && x().length == 1){
        textDiv.textContent = '-'
    }
    if(x()[x().length-1] !== '-' && x()[x().length-1] !== '.'){
        textDiv.textContent += '-'
    }
}

function pointFunction(){
    if(x()[x().length-1] !== '/' && x()[x().length-1] !== '.' && x()[x().length-1] !== '(' && x()[x().length-1] !== ')' && x()[x().length-1] !== '%' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '.'
    }
}

function equalFunction(){
    textDiv.textContent = eval(textDiv.textContent)
}
