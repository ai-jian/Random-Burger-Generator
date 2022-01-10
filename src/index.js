const burgerDisplay = document.querySelector('.display')
const btn = document.querySelector('button')

function getData() {
    fetch('http://my-burger-api.herokuapp.com/burgers')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const randomInteger = Math.floor(Math.random() * data.length)
            const burgerName = data[randomInteger].name
            burgerDisplay.innerHTML = burgerName
        })
}
btn.addEventListener('click', getData)

