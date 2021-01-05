const todoInput = document.querySelector('.todoInput')
const addBtn = document.querySelector('.addBtn')
const alertInfo = document.querySelector('.alertInfo')
const ulList = document.querySelector('ul')


$("#important").prop( "checked", false );

todoInput.addEventListener('keyup', () => {
    value = todoInput.value;
    alertInfo.innerHTML = '';
    alertInfo.style.color = 'gray';
})
addBtn.addEventListener('click', () => {
    if(todoInput.value == '') {
        alertInfo.innerHTML = 'Wprowadź nazwe produktu!';
        alertInfo.style.color = 'red';
    }
    else {
        alertInfo.innerHTML = '';
        alertInfo.style.color = 'gray';
        const liList = document.createElement('li')
        liList.textContent = todoInput.value;
        const tools = document.createElement('div');
        tools.classList.add('tools');
        const completeBtn = document.createElement('button')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        completeBtn.classList.add('complete')
        editBtn.classList.add('edit')
        deleteBtn.classList.add('delete')
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        editBtn.innerHTML = 'EDIT'
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
        const important = document.querySelector('#important')
        if(important.classList.contains('yes')) {
            liList.style.color = 'red'
            liList.style.fontWeight = 'bold'
            console.log('red')
        }
        else {
            console.log('XD');
        }

        const data = moment().format('LLL');
        const dataelem = document.createElement('p')
        dataelem.textContent = data;
        dataelem.style.fontSize = '13px'
        console.log(dataelem);

        tools.appendChild(completeBtn)
        tools.appendChild(editBtn)
        tools.appendChild(deleteBtn)
        liList.appendChild(dataelem)
        liList.appendChild(tools);
        ulList.appendChild(liList);

        todoInput.value = '';
        $("#important").prop( "checked", false );
        important.classList.remove('yes')


    }
})
const popupAccept = document.querySelector('.accept')
const popupInput = document.querySelector('.popupInput')

let nearLi;
ulList.addEventListener('click', (e) => {
    
    if(e.target.closest('button').classList.contains('complete')){
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    }
    if(e.target.closest('button').classList.contains('delete')){
        e.target.closest('li').remove();
    }
    if(e.target.closest('button').classList.contains('edit')){
        nearLi = e.target.closest('li')
        console.log(nearLi)
        const popup = document.querySelector('.popup')
        popup.style.display = 'flex';
        const cancel = document.querySelector('.cancel')
        cancel.addEventListener('click', () => {
        popup.style.display = 'none';
        })
        popupInput.value = nearLi.firstChild.textContent

        popupAccept.addEventListener('click', () => {
            if(popupInput.value == '') {
                const h3 = document.querySelector('.h3')
                h3.innerHTML = 'Wprowadź nazwę'
                h3.style.color = 'red';
            }
            else {

                nearLi.firstChild.textContent = popupInput.value;
                popup.style.display = 'none';
                nearLi = ''

            }
        })
    }
})


//IMPORTANT
const important = document.querySelector('#important');
important.addEventListener('click', () => {
    important.classList.toggle('yes')
})

important.classList.remove('yes')


//FILTER
const filterInput = document.querySelector('#filter') 

filterInput.addEventListener('keyup', () => {
    const liAll = document.querySelectorAll('li');
    const liAllArr = Array.prototype.slice.call(liAll)
    console.log(liAllArr);
    liAllArr.filter(function (x) { 
    if(x.firstChild.textContent.includes(filterInput.value)){
        console.log('tak');
        x.style.display = 'flex'
    }
    else {
        console.log('nie');
        x.style.display = 'none'
    }
    console.log(x.firstChild.textContent);

})
})
