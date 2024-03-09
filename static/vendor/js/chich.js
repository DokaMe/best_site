function super_rotate(){
    if (a.innerHTML  == '<h1>Марк</h1>'){
        wow.classList.add('wow_anim')
        a.innerHTML = '<p>Главый герой</p>'
    }
    else{
        wow.classList.remove('wow_anim')
        wow.classList.add('wow_anim2')
        a.innerHTML = '<h1>Марк</h1>'
    }
    
}
function super_rotate7(){
    if (p.innerHTML  == '<h1>Алёна</h1>'){
        wow4.classList.add('wow4_anim')
        p.innerHTML = '<p>Сестра Паши</p>'
    }
    else{
        wow4.classList.remove('wow4_anim')
        wow4.classList.add('wow4_anim4')
        p.innerHTML = '<h1>Алёна</h1>'
    }
}
    
function super_rotate3(){
    if(b.innerHTML == '<h1>Лиля</h1>'){
        wow2.classList.add('wow2_anim')
        b.innerHTML = '<p>Сестра Марка</p>'
    }
    else{
        wow2.classList.remove('wow2_anim')
        wow2.classList.add('wow2_anim2')
        b.innerHTML = '<h1>Лиля</h1>'
    }
}
function super_rotate5(){
    if(k.innerHTML == '<h1>Паша</h1>'){
        wow3.classList.add('wow3_anim')
        k.innerHTML = '<p>Друг Марка</p>'
    }
    else{
        wow3.classList.remove('wow3_anim')
        wow3.classList.add('wow3_anim3')
        k.innerHTML = '<h1>Паша</h1>'
    }
}
function super_rotate4(){
    wow2.classList.remove('wow2_anim2')
}
function super_rotate8(){
    wow4.classList.remove('wow4_anim4')
}

function super_rotate6(){
    wow3.classList.remove('wow3_anim3')
}
function super_rotate2(){
    wow.classList.remove('wow_anim2')
}

let wow = document.querySelector('.wow')
let wow2 = document.querySelector('.wow2')
let wow3 =document.querySelector('.wow3')
let wow4 =document.querySelector('.wow4')

let a = document.getElementById('wow')
let b = document.getElementById('wow2')
let k = document.getElementById('wow3')
let p = document.getElementById('wow4')


wow3.addEventListener('click', super_rotate5)
wow3.addEventListener('animationend', super_rotate6)

wow4.addEventListener('click', super_rotate7)
wow4.addEventListener('animationend', super_rotate8)


wow2.addEventListener('click', super_rotate3)
wow2.addEventListener('animationend', super_rotate4)

wow.addEventListener('click', super_rotate)
wow.addEventListener('animationend', super_rotate2)