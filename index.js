const addExpandEffectToBoxes = () => {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mousedown', e => {
            e.preventDefault()
            if (box.classList.contains('expanded')) {
                box.classList.remove('expanded')
                if (box.contains(document.activeElement)) {
                    document.activeElement.blur()
                }
            } else {
                box.classList.add('expanded')
            }
        })
    })

    document.querySelectorAll('.box p, .box h2, .box img').forEach(boxChild => {
        boxChild.addEventListener('focus', e => {
            e.preventDefault()
            if (!boxChild.parentElement.classList.contains('expanded')) {
                boxChild.parentElement.classList.add('expanded')
            }
        })
    })
}

addExpandEffectToBoxes()