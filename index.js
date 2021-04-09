const addExpandEffectToBoxes = () => {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', e => {
            e.preventDefault()
            if (box.classList.contains('expanded')) {
                box.classList.remove('expanded')
            } else {
                box.classList.add('expanded')
            }
        })
    })
}

addExpandEffectToBoxes()