export function populateLogo(logo){

}
export function populateMenu(menu, items){
    for (let i = 0; i < items.length; i++){
        const btn = document.createElement('div')
            btn.setAttribute('class', 'menuBtn')
        const link = document.createElement('a')
            link.setAttribute('class', 'menuLink')
            link.textContent = items[i].title
            link.href = items[i].url
        btn.appendChild(link)
        menu.appendChild(btn)
    }
}