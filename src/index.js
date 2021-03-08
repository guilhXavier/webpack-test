import _ from 'lodash'
import './style.css'
import Icon from './download.jpeg'
import Data from './data.xml'
import Notes from './data.csv'

function component() {
	const elem = document.createElement('div')

	elem.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
	elem.classList.add('hello')

	const myIcon = new Image()
	myIcon.src = Icon

	elem.appendChild(myIcon)

	console.log(Data, 1)
	console.log(Notes, 2)

	return elem
}

document.body.appendChild(component())
