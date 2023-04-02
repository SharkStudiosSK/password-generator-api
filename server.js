const express = require('express');
const app = express();

app.get('/password/:length', (req, res) => {
  const length = parseInt(req.params.length);
  const password = generatePassword(length);
  res.json({ password });
});

function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|\\;:\'",.<>?/';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
