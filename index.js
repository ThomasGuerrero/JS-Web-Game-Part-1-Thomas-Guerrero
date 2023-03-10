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
    item.addEventListener('click', function() {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = image
        inventory.append(inventoryItem)
    })
}
let inventory = document.createElement('div')

function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()

newImage ('assets/green-character.gif', '100', '100')
newImage ('assets/pine-tree.png', '450', '200')
newImage ('assets/well.png', '300', '300')
newImage ('assets/tree.png', '700', '400')

newItem ('assets/sheild.png', '165', '185')
newItem ('assets/staff.png', '600', '100')
newItem ('assets/sword.png','300', '100')

