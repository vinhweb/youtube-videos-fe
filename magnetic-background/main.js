const container = document.body
const totalBoxes = 300
const boxes = []

for(let i=1; i<= totalBoxes; i++){
  const box = document.createElement('div')

  box.className = 'box'

  container.appendChild(box)
  boxes.push(box)
}

document.addEventListener('mousemove', (e) => {
  const {clientX, clientY} = e

  boxes.forEach(box => {
    const boxRect = box.getBoundingClientRect()

    const boxCenterX = boxRect.left + boxRect.width/2
    const boxCenterY = boxRect.top + boxRect.height/2

    const deltaX = boxCenterX - clientX
    const deltaY = boxCenterY - clientY

    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI

    box.style.transform = `rotate(${angle}deg)`
  })
})
