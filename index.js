function newImage (image, left, bottom) {
    let item = document.createElement('img')
    item.src = image
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

function newItem (image, left, bottom) {
    let item = newImage(image, left, bottom)
    item.addEventListener('dblclick', () => {
        item.remove() 
    })
}

newImage ('assets/green-character.gif', '100', '100')
newImage ('assets/pine-tree.png', '450', '200')
newImage ('assets/well.png', '300', '300')
newImage ('assets/tree.png', '700', '400')

newItem ('assets/sheild.png', '165', '185')
newItem ('assets/staff.png', '600', '100')
newItem ('assets/sword.png','300', '100')

