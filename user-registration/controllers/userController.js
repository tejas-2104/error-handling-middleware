// controllers/userController.js
const validateName = name => /^[A-Z][a-z]*$/.test(name);
const validatePassword = password => /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
const validateEmail = email => /@/.test(email);
const validatePhoneNumber = phone => /^\d{10,}$/.test(phone);

exports.registerUser = (req, res, next) => {
  const { firstName, lastName, password, email, phoneNumber } = req.body;

  if (!validateName(firstName)) {
    return next(new Error('First name must start with a capital letter.'));
  }
  
  if (!validateName(lastName)) {
    return next(new Error('Last name must start with a capital letter.'));
  }

  if (!validatePassword(password)) {
    return next(new Error('Password must be at least 8 characters long and contain at least one special character, one uppercase letter, and one numeric character.'));
  }

  if (!validateEmail(email)) {
    return next(new Error('Invalid email address.'));
  }

  if (!validatePhoneNumber(phoneNumber)) {
    return next(new Error('Phone number must be at least 10 digits.'));
  }

  // Simulate user registration success
  res.status(201).json({ message: 'User registered successfully!' });
};
