const jwt = require('jsonwebtoken');

const token = jwt.sign({ test: true }, 'my-secret-key');

console.log(token);

const decodedJWT = jwt.decode(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2NTc1MzU4MzV9.h7thhxNfSYpaXNRVCAKTbH7l1v4kXbmkrrH8VYkr4jk'
);

console.log(decodedJWT);
