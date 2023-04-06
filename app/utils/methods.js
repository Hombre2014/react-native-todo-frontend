export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  console.log('Error is: ', error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

export const isValidEmail = (value) => {
  const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regexEmail.test(value);
};
