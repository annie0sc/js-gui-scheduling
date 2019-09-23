console.log('Starting script')

const delay_ms = 1000;
let intervalID;  // id will be assigned when setInterval is called

document.getElementById('btn').addEventListener('click', () => {
  console.log('Button clicked - calling clearInterval.')
  console.log('Refresh page to reflash.')
  clearInterval(intervalID)
})

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('On document DOMContentLoaded - fires when initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.\nStarting flash!')
  intervalID = setInterval(flashText, delay_ms)
})

window.addEventListener('load', (event) => {
  console.log('On window load - ALL content has finished loading.\nNo need to wait this long.')
})

function flashText() {
  const el = document.getElementById('box')
  el.style.color = el.style.color == 'green' ? 'red' : 'green'
}

console.log('Ending script')