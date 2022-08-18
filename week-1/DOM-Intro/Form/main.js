function validate() {
  const name = document.getElementById("name").value;
  const salary = document.getElementById("desired-salary").value;
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;
  if (name.length <= 2) {
    createError("Name must be longer than 2 characters");
  }
  if (salary <= 10000 || salary >= 16000) {
    createError("Salary must be greater than 10,000 but less than 16,000");
  }
  if (birthday === "") {
    createError("Birthday may not be null");
  }
  if (phone.length !== 10) {
    createError("Phone must be 10 digits long");
  } else {
    welcomeUser(name);
  }
}

function welcomeUser(name) {
  document.getElementsByClassName("container")[0].style.display = "none";
  let welcome = document.createElement("h1");
  welcome.innerHTML = `Hi ${name}, welcome!`;
  document.body.appendChild(welcome);
}

function createError(text) {
  let error = document.createElement("p");
  error.style.color = "red";
  error.innerHTML = text;
  document.getElementsByClassName("errors")[0].appendChild(error);
}
