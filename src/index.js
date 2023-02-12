import updateUser from './userData'

import './style/main.scss'
import noteImg from './img/note.svg'

const mainImg = document.querySelector('.main-img')
mainImg.src = noteImg

const mainBtn = document.querySelector('.main-btn')
mainBtn.addEventListener('click', updateUser)
updateUser()