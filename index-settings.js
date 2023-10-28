let email = document.querySelector('.email')

let username = document.querySelector('.name')
let emailInput = document.getElementById('email')
function changeInfo() {
email.textContent = emailInput.value;

}
let inputs = document.querySelectorAll('.form-info > div > input');
function clearInputs(inputs) {
    for(i=0; i<inputs.length; i++){
        inputs[i].value = '';
           }
}
 
function createName () {
    let firstName = document.querySelector('.firstName');
    let secondName = document.querySelector('.secondName')
    let name = [];
    name.push(firstName.value);
    name.push(secondName.value);
   name = name.join(' ')
   return name

}
function changeName() {
    let nameInput = document.querySelector('.name')
    console.log(nameInput);
    let newName = createName();
    console.log(newName);
    nameInput.textContent = newName
}

let buttonInfo = document.querySelector('.form-button');
buttonInfo.addEventListener('click', function changeInformation(event){
    event.preventDefault();
    changeInfo();
    changeName();
clearInputs(inputs);

})



let buttonCard = document.querySelector('#submitCard');
let cardInputs = document.querySelectorAll(('.form-pay > div > input'))

function thanks() {
    let thank = document.querySelector('.hiddenSpan');
thank.classList.remove('hiddenSpan');
}

buttonCard.addEventListener('click', function changeValues(event){
event.preventDefault();
clearInputs(cardInputs);
thanks();
})