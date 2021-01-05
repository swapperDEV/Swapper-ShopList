//IN PROGRESS
const author = document.querySelector('.author');
    author.classList.add('active')

//CONFIGABLE
    let pltranslate = ['Lista zakupów', 'Podaj nazwe produktu...', 'DODAJ', 'Ważne', 'LISTA ZAKUPOWA', 'Twoje zakupy', 'UI Zainspirowane', 'Edytuj produkt:', 'Wprowadź nową nazwe produktu...', 'ZATWIERDŹ', 'ANULUJ', 'Filtruj produkty...']
    let entranslate = ['Shop List', 'Give me product name...', 'ADD', 'IMPORTANT', 'SHOP LIST', 'Your shopping', 'UI Inspired', 'EDIT PRODUCT', 'Write new product name...', 'OKAY!', 'CANCEL', 'Filter Product...']
//CONFIGABLE

//CONST TRANSLATE

const translate1 = document.querySelector('.translate1')
const translate2 = document.querySelector('.translate2')
const translate3 = document.querySelector('.translate3')
const translate4 = document.querySelector('.translate4')
const translate5 = document.querySelector('.translate5')
const translate6 = document.querySelector('.translate6')
const translate7 = document.querySelector('.translate7')
const translate8 = document.querySelector('.translate8')
const translate9 = document.querySelector('.translate9')
const translate10 = document.querySelector('.translate10')
const translate11 = document.querySelector('.translate11')


//CONST TRANSLATE

const svg = document.querySelector('.icon-tabler')
let btnpl = document.querySelector('#pl') 
let btnen = document.querySelector('#en') 
svg.addEventListener('click', () => {
    btnpl.classList.toggle('hide')
    btnen.classList.toggle('hide')
})


const pl = () => {
    console.log(`Włączam tłumaczenie PL`);
    translate1.textContent = pltranslate[0]
    translate2.placeholder = pltranslate[1]
    translate3.textContent = pltranslate[2]
    translate4.textContent = pltranslate[3]
    translate5.textContent = pltranslate[4]
    translate6.textContent = pltranslate[5]
    translate7.textContent = pltranslate[6]
    translate8.textContent = pltranslate[7]
    translate9.placeholder = pltranslate[8]
    translate10.textContent = pltranslate[9]
    translate11.textContent = pltranslate[10]
    filterInput.placeholder = pltranslate[11]
}
const en = () => {
    console.log(`Włączam tłumaczenie EN`);
    translate1.textContent = entranslate[0]
    translate2.placeholder = entranslate[1]
    translate3.textContent = entranslate[2]
    translate4.textContent = entranslate[3]
    translate5.textContent = entranslate[4]
    translate6.textContent = entranslate[5]
    translate7.textContent = entranslate[6]
    translate8.textContent = entranslate[7]
    translate9.placeholder = entranslate[8]
    translate10.textContent = entranslate[9]
    translate11.textContent = entranslate[10]
    filterInput.placeholder = entranslate[11]
}

btnpl.addEventListener('click', pl)
btnen.addEventListener('click', en)

