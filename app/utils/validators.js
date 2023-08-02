export function validateInput(inputName="",input,setInputError) {
    if (!input) {
        setInputError(`${inputName} is required`);
        return false;
      }
      setInputError('');
      return true;
}

export function validateEmail(email='',setEmailError=()=>{}){
    const emailPattern = /\S+@\S+\.\S+/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };