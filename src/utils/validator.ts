export const validateEmailOrPhone = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(09|01)\d{7,9}$/;

  if (emailRegex.test(value)) return true; // Valid email
  if (phoneRegex.test(value)) return true; // Valid phone number
  return "Invalid email or phone number";
};
