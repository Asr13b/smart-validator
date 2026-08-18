# Smart Validator

A lightweight JavaScript validation package for common form validation tasks.

## Features

- Email validation
- Phone number validation
- Strong password validation
- Simple and reusable functions
- Tested with Vitest

## Installation

```bash
npm install smart-validator
```

Usage
import {
isEmail,
isPhone,
isStrongPassword
} from "smart-validator";

console.log(isEmail("hello@gmail.com"));
console.log(isPhone("+251911234567"));
console.log(isStrongPassword("Hello123!"));
API
isEmail(value)

Returns true for a valid email format.

isPhone(value)

Returns true for a valid phone number format.

isStrongPassword(value)

Checks whether the password meets the package's strength requirements.

Development

Clone the repository and install dependencies:

npm install

Run tests:

npm run test:run
License

MIT

### One important point

Because you haven't published it yet, don't claim that:

```bash
npm install smart-validator

currently works from the public npm registry.

The README can describe the intended published usage, but until you publish it, your actual testing is:

npm install ../smart-validator
```
