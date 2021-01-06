window.addEventListener('load', showData);

personGenerator.generateButton.addEventListener('click', showData);

personGenerator.clearButton.addEventListener('click', function(){
    personGenerator.clearData();
});

function showData() {
    let initPerson = personGenerator.getPerson(personGenerator.GENDER_MALE);
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronym;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
    
}