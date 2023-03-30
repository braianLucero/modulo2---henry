const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function exValidate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "el name no debe estar vacio Braian";
  } else if (!inputs.email) {
    errors.email = "el email no debe estar vacio ";
  } else if (!regexUsername.test(inputs.email)) {
    errors.email = "no coincide con los caracteres BOBO";
  } else if (!inputs.message) {
    errors.message = "el message no debe estar vacio ";
  }
  return errors;
}
