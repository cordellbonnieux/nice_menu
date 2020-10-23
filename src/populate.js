export function populateLogo(wrapper, text, image){
    if (image.img){
        const imgLink = document.createElement('a')
        wrapper.appendChild(image)
        return
    } else if (text){
        const textWrapper = document.createElement('a')
            textWrapper.setAttribute('id', 'websiteTitle')
            textWrapper.textContent = text.title
            textWrapper.href = text.link
        wrapper.appendChild(textWrapper)
        return
    }
}
export function populateMenu(menu, items){
    for (let i = 0; i < items.length; i++){
        const btn = document.createElement('div')
            btn.setAttribute('class', 'menuBtn')
            btn.setAttribute('id', items[i].id)
        const link = document.createElement('a')
            link.setAttribute('class', 'menuLink')
            link.textContent = items[i].title
            link.href = items[i].url
        btn.appendChild(link)
        menu.appendChild(btn)
    }
}