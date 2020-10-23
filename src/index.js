import {buildStructure} from './structure'
import {populateLogo, populateMenu} from './populate'

const content = document.getElementById('content')

let logoText = {
    title: "Placeholder Title",
    link: '#',
    }
let logoImg = {
    img:'', // attach a logo img if you want to use
    link: '#',
    }
let menuItems = [
    {
        title: 'link 1',
        url: '#',
        id: 'menuLink1'
    },
    {
        title: 'link 2',
        url: '#',
        id: 'menuLink2'
    },
    {
        title: 'link 3',
        url: '#',
        id: 'menuLink3'
    },
    {
        title: 'link 4',
        url: '#',
        id: 'menuLink4'
    },
    {
        title: 'link 5',
        url: '#',
        id: 'menuLink5'
    },
    {
        title: 'link 6',
        url: '#',
        id: 'menuLink6'
    },
    {
        title: 'link 7',
        url: '#',
        id: 'menuLink7'
    },
    {
        title: 'link 8',
        url: '#',
        id: 'menuLink8'
    },
    {
        title: 'link 9',
        url: '#',
        id: 'menuLink9'
    },
    {
        title: 'link 10',
        url: '#',
        id: 'menuLink10'
    },
    {
        title: 'link 11',
        url: '#',
        id: 'menuLink11'
    },
    {
        title: 'link 12',
        url: '#',
        id: 'menuLink12'
    },
    {
        title: 'link 13',
        url: '#',
        id: 'menuLink13'
    },
    {
        title: 'link 14',
        url: '#',
        id: 'menuLink14'
    },
    {
        title: 'link 15',
        url: '#',
        id: 'menuLink15'
    },
    {
        title: 'link 16',
        url: '#',
        id: 'menuLink16'
    },
    {
        title: 'link 17',
        url: '#',
        id: 'menuLink17'
    },
    {
        title: 'link 18',
        url: '#',
        id: 'menuLink18'
    },
    {
        title: 'link 19',
        url: '#',
        id: 'menuLink19'
    },
    {
        title: 'link 20',
        url: '#',
        id: 'menuLink20'
    },
]

buildStructure(content)
populateLogo(logoWrapper, logoText, logoImg)
populateMenu(menuWrapper, menuItems)

import css from './style.css'

