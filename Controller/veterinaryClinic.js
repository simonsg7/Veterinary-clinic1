class veterinaryClinic {
    veterinaryName;
    address;
    phoneNumber;

    constructor(veterinaryName, address, phoneNumber) {
        this.veterinaryName = veterinaryName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    veterinaryClinicInfo () {
        return `${this.veterinaryName} veterinary clinic with address ${this.address} and phone number ${this.phoneNumber}.`
    }
}

const veterinary1 = new veterinaryClinic("Happy Pets", "Calle123", "3121234567");

function showVeterinary() {
    let containerVeterinary = document.querySelector(".container-veterinary");
    containerVeterinary.innerHTML = veterinary1.veterinaryClinicInfo();
}

showVeterinary();