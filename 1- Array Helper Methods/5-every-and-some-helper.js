const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// every helper 
const computerRunProgram = computers.every((computer) => {
    return computer.ram > 16;
});

console.log(computerRunProgram)

// some helper
const computerRunProgram_2 = computers.some((computer) => {
    return computer.ram > 16;
})

console.log(computerRunProgram_2);

//  ----------------------------------------------- //

const names = [
    "Muhammed",
    "Kamal",
    "Ali"
];
//
const check_1 = names.every((name) => {
    return name.length > 3;
})

console.log(check_1);

//
const check_2 = names.some((name) => {
    return name.length > 3;
})

console.log(check_2);

//  ----------------------------------------------- //

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}


const username = new Field('Muhammed');
const password = new Field('new_password');
const birthday = new Field('12/12/2001');



const fields = [username, password, birthday];

const formIsValid = fields.every((field) => {
    return field.validate();
})

console.log(formIsValid);






















