document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs();
})

function renderDog(dog) {
    const table = document.getElementById("table-body")
    const newRow = document.createElement("tr")
    const name = document.createElement("td")
    const breed = document.createElement("td")
    const sex = document.createElement("td")
    const editCell = document.createElement("td")
    const editBtn = document.createElement("button")

    name.textContent = dog.name
    name.className = "padding center"
    breed.textContent = dog.breed
    breed.className = "padding center"
    sex.textContent = dog.sex
    sex.className = "padding center"
    editBtn.textContent = "edit"
    editCell.className = "padding center"
    newRow.id = dog.id

    editBtn.addEventListener('click', editDog)

    editCell.appendChild(editBtn)
    newRow.append(name, breed, sex, editCell)
    table.appendChild(newRow)
}

//GET
function fetchAllDogs() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(dogs => {
        dogs.forEach(dog => renderDog(dog))
    })
    .catch(error => console.log(error.message))
}

//PATCH
function editDog (e) {
    const parent = e.target.parentElement.parentElement
    const form = document.querySelector('form')
    form.name.value = parent.childNodes[0].textContent
    form.breed.value = parent.childNodes[1].textContent
    form.sex.value = parent.childNodes[2].textContent
    const id = parent.id
    // const newName = parent
    // const newBreed =
    // const newSex = 
    form.addEventListener('submit', () => {

    })
}

function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target)
}