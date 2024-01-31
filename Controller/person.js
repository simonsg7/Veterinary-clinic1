class person {
    personName;
    lastname;
    age;
    id;

    constructor(personName, lastname, age, id) {
        this.personName = personName;
        this.lastname = lastname;
        this.age = age;
        this.id = id;
    }

    personInfo() {
        return `This person with name ${this.personName} ${this.lastname} with age ${this.age}, have a id with number ${this.id}.`;
    }
}

const person1 = new person("Pedro", "Pérez", "42", "10203040");

function showPerson() {
    let containerPerson = document.querySelector(".container-person");
    containerPerson.innerHTML = person1.personInfo();
}

showPerson();