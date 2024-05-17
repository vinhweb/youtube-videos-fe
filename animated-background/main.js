const group = document.querySelector('.group')
for(let i = 1; i< 50; i++){
  const containerId = `iconContainer${i}`;
  const container = document.createElement('div')
  
  container.className = 'iconContainer'
  container.id = containerId
  
  group.appendChild(container)
  addIcons(containerId)
}

function addIcons(containerId){
  const iconContainer = document.querySelector(`#${containerId}`)

  // \uf001
  const Unicode = Array(20).fill(null).map((_, index) =>
    String.fromCodePoint(parseInt(`f${String(index).padStart(3,0)}`, 16))
  )

  for(let i = 0; i< 50; i++){
    const icon = document.createElement('i')
    icon.className = `icon fas`
    icon.innerHTML = randomIcon(Unicode)
    iconContainer.appendChild(icon)
  }
}

function randomIcon(values){
  const randomIndex = Math.floor(Math.random() * values.length)
  return values[randomIndex]
}