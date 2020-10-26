export function populateLogo(wrapper, text, image){
    if (image.img){
        const imgLink = document.createElement('a')
            imgLink.href = image.link
            imgLink.setAttribute('id', 'websiteLogo')
        const img = document.createElement('img')
            img.src = image.img
        imgLink.appendChild(img)
        wrapper.appendChild(imgLink)
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
    let menuBtn = document.createElement('div')
    createMenuBtn(menuBtn, menu)
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
            btn.setAttribute('class', 'more menuOff')
            moreBtn.appendChild(btn)
        } else {
            menuBtn.appendChild(btn)
        }
    }
    menu.prepend(menuBtn)
    menuBtn.appendChild(moreBtn)
}
function createMoreBtn(more){
    let moreWrapper = document.createElement('div')  
        moreWrapper.setAttribute('id', 'moreWrapper')
    let moreText = document.createElement('a')
        moreText.innerHTML = 'More &#8250;';
        dropdown(moreText)
        moreWrapper.appendChild(moreText)
        more.appendChild(moreWrapper)
        more.setAttribute('id', 'moreBtn')
        more.style.cursor = 'pointer'
}
function createMenuBtn(menu , wrapper){
    let menuWrapper = document.createElement('div')  
        menuWrapper.setAttribute('id', 'menuBtnWrapper')
    let menuText = document.createElement('a')
        menuText.textContent = 'Menu'
        responsiveDropdown(menuText)
        menuWrapper.appendChild(menuText)
        wrapper.appendChild(menuWrapper)
        menu.setAttribute('id', 'menu')
        menu.style.cursor = 'pointer'  
}
function dropdown(moreText){
    return moreText.addEventListener('click', function(){
        let menuOn = Array.prototype.slice.call(document.getElementsByClassName('menuOn'))
        let menuOff = Array.prototype.slice.call(document.getElementsByClassName('menuOff'))
        for (let i = 0; i < menuOff.length; i++){
            menuOff[i].style.display = 'block'
            menuOff[i].setAttribute('class', 'more menuOn')
        }
        for (let i = 0; i < menuOn.length; i++){
            menuOn[i].style.display = 'none'
            menuOn[i].setAttribute('class', 'more menuOff')
        }
    })
}
function responsiveDropdown(menuText){
    return menuText.addEventListener('click', function(){
        let responsiveMenu = document.getElementById('menu')
        let responsiveMenuOpen = document.getElementById('responsiveMenuOpen')
        if (responsiveMenu){
            responsiveMenu.style.display = 'block'
            responsiveMenu.setAttribute('id', 'responsiveMenuOpen')
            return
        } else if (responsiveMenuOpen){
            responsiveMenuOpen.style.display = 'none'
            responsiveMenuOpen.setAttribute('id', 'menu')
            return
        }
    })
}