const toggleExpandBox = (e, box) => {
    e.preventDefault()
    if (box.classList.contains('expanded')) {
        box.classList.remove('expanded')
        if (box.contains(document.activeElement)) {
            document.activeElement.blur()
        }
    } else {
        box.classList.add('expanded')
    }
}

const expandParentBox = (e, boxChild) => {
    e.preventDefault()
    if (!boxChild.parentElement.classList.contains('expanded')) {
        boxChild.parentElement.classList.add('expanded')
    }
}

const addExpandEffectToBoxes = () => {
    document.querySelectorAll('article').forEach(box => {
        box.addEventListener('mousedown', e => {
            toggleExpandBox(e, box)
        })
    })

    document.querySelectorAll('article p, article h2, article img').forEach(boxChild => {
        boxChild.addEventListener('focus', e => {
            expandParentBox(e, boxChild)
        })
    })
}

addExpandEffectToBoxes()