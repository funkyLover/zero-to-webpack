
import './index.scss'
import './bootstrap.js'
import fn from './other.js'

fn()
var isGreen = false

document.getElementById('btn').addEventListener('click', () => {
  var title = document.getElementById('title')
  if (isGreen) {
    title.classList.add('green')
  } else {
    title.classList.remove('green')
  }
})
