// console.log('hello world')

const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value 
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'

    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)

    inputField.value = ""
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent =  `${event.target.parentNode.childNodes[0].textContent} Deleted!`
    console.log(event.target.parentNode)
    revealMessage()
}

document.querySelector('form').addEventListener('submit', addMovie)

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent =  `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=> {
        message.classList.add('hide')
    }, 1000)
}


