export function buildStructure(content){
    const wrapper = document.createElement('div')
        wrapper.setAttribute('id', 'wrapper')
        content.appendChild(wrapper)
    const logoWrapper = document.createElement('div')
        logoWrapper.setAttribute('id', 'logoWrapper')
        wrapper.appendChild(logoWrapper)
    const menuWrapper = document.createElement('div', 'menuWrapper')
        menuWrapper.setAttribute('id', 'menuWrapper')
        wrapper.appendChild(menuWrapper)
        return logoWrapper, menuWrapper
}   