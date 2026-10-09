const Validation = (name, email, password) => {
  const isEmailValid = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);

  if (!isNameValid) return "Name is Not Valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not vaid";
  return null;
};
export default Validation;
