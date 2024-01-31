class animal {
    animalName;
    gender;
    breed;

    constructor(animalName, gender, breed) {
        this.animalName = animalName;
        this.gender = gender;
        this.breed = breed;
    }

    animalInfo () {
        return `${this.animalName} is a animal with gender ${this.gender} and breed ${this.breed}.`
    }
}

const animal1 = new animal("Tom", "Male", "Cat-Bombay");

function showAnimal() {
    let containerAnimal = document.querySelector(".container-animal");
    containerAnimal.innerHTML = animal1.animalInfo();
}

showAnimal();