console.log(`21 01 18 JS DOM Events Lecture`);

// select form fields
let studentName = document.querySelector("#studentName");
let studentNumber = document.querySelector("#studentNumber");
// select submit button
let submitBtn = document.querySelector("button");
// select the entires display element
let entires = document.querySelector("#entires");

// // check that selections are correct
// console.log(studentName);
// console.log(studentNumber);
// console.log(submitBtn);
// console.log(entires);

submitForm = (event) => {
    event.preventDefault(); // prevent the page from reloading
    // console.log("Submit Form!");

    // update value of entries display element by appending form submission
    entires.innerHTML += `<div class = "card bg-primary">${studentName.value} : ${studentNumber.value}</div>`

    // clear form fields
    studentName.value = "";
    studentNumber.value = "";
}


submitBtn.addEventListener("click", submitForm);