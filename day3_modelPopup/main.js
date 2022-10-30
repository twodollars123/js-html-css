var btnOpen = document.querySelector('.open-btn')

var modal = document.querySelector('.modal')

var iconClose = document.querySelector('.modal_header i')

var btnClose = document.querySelector('.footer button')

function toggleModal(e){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})

