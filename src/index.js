import _ from 'lodash'
import './style.css'
import Icon from './download.jpeg'
import Data from './data.xml'
import Notes from './data.csv'
import printMe from './print'

function component() {
  const elem = document.createElement('div')
  const btn = document.createElement('button')

  elem.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
  elem.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  elem.appendChild(myIcon)

  console.log(Data, 1)
  console.log(Notes, 2)

  elem.appendChild(btn)

  return elem
}

document.body.appendChild(component())
