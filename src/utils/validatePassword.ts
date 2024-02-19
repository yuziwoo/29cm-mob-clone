const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;

export const validatePassword = (input: string) => {
  if (input.length < 6 || !passwordRegex.test(input)) return false;
  return true;
};
