const items = document.querySelectorAll('.categories__item')


function getDescription(id) {
    return document.getElementById(`description_${id}`)
}

function changeVisible(id) {
    const classes = getDescription(id).classList
    if (Array.from(classes).find(i => i === 'active')) {
        classes.remove('active')
    } else {
        items.forEach(i => getDescription(i.id).classList.remove('active'))
        classes.add('active')
    }
    const item = document.getElementById(id).classList
    if (Array.from(item).find(i => i === 'active')) {
        item.remove('active')
    } else {
        items.forEach(i => i.classList.remove('active'))
        item.add('active')
    }
}

items.forEach(i => i.onclick = () => changeVisible(i.id))