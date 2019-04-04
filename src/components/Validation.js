import {nameRegex, emailRegex,passwordRegex} from '../config/Constants';
const inputInfo = {
  'text': { regex: nameRegex, errorMessage: 'Please enter only alphabets' },
  'email': { regex: emailRegex, errorMessage: 'Please enter valid email address' },
  'password': { regex: passwordRegex, errorMessage: 'Password must be of length 8 or greater' }
};

export {inputInfo};