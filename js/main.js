// const elSomsa = document.querySelector('.somsa');     
// const elPalov = document.querySelector('.palov');
// const elMonti = document.querySelector('.monti');
// const elKabob = document.querySelector('.kabob');
// const elLagmon = document.querySelector('.lagmon');
// const elBaliq = document.querySelector('.baliq');
// const elMastava = document.querySelector('.mastava');
// const elSalat = document.querySelector('.salat');
// const elBtn = document.querySelector('.btn');
// elBtn.addEventListener('click', function() {
//     elInput.textContent = '7000 sum' + elJami.value
// })

const elInput = document.querySelector('.input');
const elJami = document.querySelector('.jami');
const elMain = document.querySelector('.main');
const elBtn = document.querySelector('.btn');
const elBtn1 = document.querySelector('.btn_1');
const elBtn2 = document.querySelector('.btn_2');
const elBtn3 = document.querySelector('.btn_3');
const elBtn4 = document.querySelector('.btn_4');

// elMain.style.display = 'inline';
elBtn.addEventListener('click', function () {
    elMain.style.display = 'inline'
})
elBtn1.addEventListener('click', function() {
    elJami.textContent = '20000'
})
elBtn2.addEventListener('click', function() {
    elJami.textContent = '15000'
})
elBtn3.addEventListener('click', function() {
    elJami.textContent = '10000'
})
elBtn4.addEventListener('click', function() {
    elJami.textContent = '5000'
})
function inputSubmit() {
    let inputValue = elInput.value
    if (inputValue == 'somsa') {
        elJami.textContent = '8000'
    }
    // else if (btn1Value == 'goshtli' == 'click') {
    //     elJami.textContent = '10000'
    // }
    else if (inputValue == 'palov') {
        elJami.textContent = '15000 sum'
    } else if (inputValue == 'monti') {
        elJami.textContent = '3000 sum'
    } else if (inputValue == 'shashlik') {
        elJami.textContent = '15000 sum'
    } else if (inputValue == 'lagmon') {
        elJami.textContent = '20000 sum'
    } else if (inputValue == 'baliq') {
        elJami.textContent = '60000 sum'
    } else if (inputValue == 'mastava') {
        elJami.textContent = '15000 sum'
    } else if (inputValue == 'salat') {
        elJami.textContent = '25000 sum'
    }
    else {
        elJami.textContent = 'Bunday taom mavjud emas'
    }

}
// function btnSubmit() {
//     let elBtn1Value = elBtn1.value
//     if (elBtn1Value == 'Goshtlik') {
//         elJami.textContent = '10000 sum'
//     }
// }




