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
console.log("ESERCIZIO 2°")

const ownerList = []

class Pet {
    constructor(_petName, _ownerName, _species, _breed){
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
    }

sameOwner(pet) {

        if (ownerList.includes(this.ownerName)){
            console.log(this.ownerName)
           return console.log(true)
        } else {
            ownerList.push(this.ownerName)
            return console.log(false)
        }
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

    
    // if(ownerList.includes(ownerName)){
    //     console.log(true)   
    //     } else {
    //         ownerList.push(ownerName)
    //         console.log(false)
    //     }

    pet.sameOwner(ownerName)

    form.reset()
    //CREA LA SCHEDA DEL PET
    const petsContainer = document.getElementById('pets-container')
    petsContainer.innerHTML += `
    <div class="col">
                <ul class="list-group">
                <li class="list-group-item border border-2  border-primary bg-primary p-2"></li>
                <li class="list-group-item">Nome: ${petName}</li>
                <li class="list-group-item">Proprietario: ${ownerName}</li>
                <li class="list-group-item">Specie: ${species}</li>
                <li class="list-group-item">Famiglia: ${breed}</li>
                </ul>
    </div>
    `
    }   
) 

console.log(document.getElementsByName('pet'))