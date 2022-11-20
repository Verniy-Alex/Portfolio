// Contact Modal
const openModalBtn = document.getElementById('openModal')
const closeModalBtn = document.getElementById('closeBtn')
const modal = document.getElementById('modal')

openModalBtn.addEventListener('click', () => {
    modal.classList.add('active')
})
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active')
})

window.onclick = function (event) {
    if (event.target == modal) {
        // modal.style.display = 'none'
        modal.classList.remove('active')
    }
}

// Chenge Theme color
function lightMode() {
    const body = document.body
    const wasLightMode = localStorage.getItem('lightMode') === 'true'

    localStorage.setItem('lightMode', !wasLightMode)
    body.classList.toggle('bg-light', !wasLightMode)
}
document.getElementById('changeColor').addEventListener('click', lightMode)

function onload() {
    document.body.classList.toggle('bg-light', localStorage.getItem('lightMode') === 'true')
}

document.addEventListener('DOMContentLoaded', onload)