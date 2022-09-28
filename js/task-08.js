const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const emailEL = formElements.email.value;
  const passwordEL = formElements.password.value;
  const error = "Введдіть ваши дані для авторизації";
  const formData = { email: emailEL, password: passwordEL };

  if (emailEL === "" || passwordEL === "") {
    alert(error);
  } else {
    console.log(formData);
    form.reset();
  }
}
form.addEventListener("submit", handleSubmit);
