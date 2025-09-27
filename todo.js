addItem.addEventListener('click', addListItem, {once: true}) // {once: true} - с помощью клика по кнопке Add item, сможем добавить li только один раз
item.addEventListener('keyup', e => { // 'e' - v dannom slu4ae, lubaya klavi6a klaviaturi
    if(e.key === 'Enter') {
        addListItem()
    }
})


function addListItem() {
    const text = item.value.trim() //trim udalyaet li6nie probeli
    if (text) {
        const li = document.createElement("li")
        const buttonDel = document.createElement("button")
        buttonDel.append('delete')
        buttonDel.addEventListener('click', e => {
            li.remove()
        })
        li.append(text, buttonDel)
        todoList.append(li)
        item.value = ''
    }
}

