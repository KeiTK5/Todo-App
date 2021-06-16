
document.querySelectorAll('.form-group').forEach(e => {
    let input = e.querySelector('input')
    input.onkeyup = () => {
        if (input.value.trim() > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    }
})