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
    let moreBtn = document.createElement('div')
    createMoreBtn(moreBtn)
    for (let i = 0; i < items.length; i++){
        const btn = document.createElement('div')
            btn.setAttribute('class', 'menuBtn')
            btn.setAttribute('id', items[i].id)
        const link = document.createElement('a')
            link.setAttribute('class', 'menuLink')
            link.textContent = items[i].title
            link.href = items[i].url
        btn.appendChild(link)
        if (i >= 5){
            btn.setAttribute('class', 'more')
            moreBtn.appendChild(btn)
            console.log('over 5')
        } else {
            menu.appendChild(btn)
            console.log('under 5')
        }
    }
    console.log('about to execute moreBtn append')
    menu.appendChild(moreBtn)
}
function createMoreBtn(more){
    let moreWrapper = document.createElement('div')  
        moreWrapper.setAttribute('id', 'moreWrapper')
    let moreText = document.createElement('span')
        moreText.textContent = 'More >'
        moreWrapper.appendChild(moreText)
        more.appendChild(moreWrapper)
        more.setAttribute('id', 'moreBtn')
        more.style.cursor = 'pointer'
}