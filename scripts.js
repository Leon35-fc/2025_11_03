//PRIMO ESERCIZIO

const User = function(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
    whoIsOlder = function(x, y) {
        if(x.age > y.age) {
            console.log(`${x.firstName} è più vecchio di ${y.firstName}`)
        } else {console.log(`${y.firstName} è più vecchio di ${x.firstName}`)
        }
    }
}

console.log("ESERCIZIO 1°")

const userA = new User ('Filippo', 'Di Giorgio', 25)
console.log(userA)

const userB = new User ('Mauro', 'Zacapa', 28)
console.log(userB)

whoIsOlder(userA, userB)

//SECONDO ESERCIZIO

class Pet {
    constructor(_petName, _ownerName, _species, _breed){
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
    }
}

const petNameInput = document.getElementById('inputPetName')
const ownertNameInput = document.getElementById('inputOwnerName')
const speciesInput = document.getElementById('inputSpecies')
const breedInput = document.getElementById('inputBreed')

const form = document.getElementById('registry')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const petName = petNameInput.value
    const ownerName = ownertNameInput.value
    const species = speciesInput.value
    const breed = breedInput.value

    const pet = new Pet(petName, ownerName, species, breed)
    console.log(pet)
    reset = function() {
        petNameInput.innerText('')
    }

    const alert = document.getElementById('toast-alert')

    alert.innerHTML += `<div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                            <img src="..." class="rounded me-2" alt="...">
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">
                            Hello, world! This is a toast message.
                            </div>
                        </div>`

    }
) 

console.log(document.getElementsByName('pet'))