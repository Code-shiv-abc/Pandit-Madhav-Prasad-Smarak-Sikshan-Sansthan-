/**
 * Validates an email address against a standard regex pattern.
 * @param email - The email address to validate.
 * @returns True if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates a phone number.
 * Must match the pattern /^\+?[\d\s\-]{10,}$/ and contain at least 10 digits.
 * @param phone - The phone number to validate.
 * @returns True if the phone number is valid, false otherwise.
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-]{10,}$/;
  const trimmedPhone = phone.trim();
  const digitCount = trimmedPhone.replace(/\D/g, '').length;

  return phoneRegex.test(trimmedPhone) && digitCount >= 10;
};
