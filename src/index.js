import {buildStructure} from './structure'
import {populateLogo, populateMenu} from './populate'

const content = document.getElementById('content')

let menuItems = [
    {
        title: 'link 1',
        url: '#'
    },
]

buildStructure(content)
populateLogo(logoWrapper)
populateMenu(menuWrapper, menuItems)

import css from './style.css'

