let body = document.querySelector('body')
let h2 = document.querySelector('h2')

// todo: random position => around the center
// todo: follow the mouse => oke

function sparkAnimation(positionX, positionY){
  for(let i = 0; i < 50; i++){
    const spark = document.createElement('i')

    spark.style.left = `${positionX}px`
    spark.style.top = `${positionY}px`

    const randomX = (Math.random() - 0.5) * window.innerWidth / 1.5
    const randomY = (Math.random() - 0.5) * window.innerWidth / 1.5

    spark.style.setProperty('--randomX', `${randomX}px`)
    spark.style.setProperty('--randomY', `${randomY}px`)

    const randomSize = Math.random()*30 + 2
    spark.style.width = `${randomSize}px`
    spark.style.height = `${randomSize}px`

    const duration = Math.random() * 2 + 0.5
    spark.style.animation = `animate ${duration}s ease-out forwards`

    const colors = ['#FFF67E', '#BFEA7C', '#9BCF53', '#416D19']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    spark.style.background = randomColor

    body.appendChild(spark)

    setTimeout(function(){
      spark.remove()
    }, 2000)
  }
}
body.addEventListener('click', (e) => {
  // Array(5).fill(null).forEach((_,index) => {
  //   const randomX = (Math.random() * .5 + .25) * window.innerWidth
  //   const randomY = (Math.random() * .6 + .15) * window.innerHeight
  //   sparkAnimation(randomX, randomY)
  // })
  sparkAnimation(e.clientX, e.clientY)
})

// range Math.random()
// max -> * +
// min -> +
