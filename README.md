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

## Usage

```js
import { isEmail, isPhone, isStrongPassword } from "smart-validator";

console.log(isEmail("hello@gmail.com"));
console.log(isPhone("+251911234567"));
console.log(isStrongPassword("Hello123!"));
```

## API

### `isEmail(value)`

Returns `true` for a valid email format.

### `isPhone(value)`

Returns `true` for a valid phone number format.

### `isStrongPassword(value)`

Returns `true` when the password meets the package's strength requirements.

## Development

Clone the repository:

```bash
git clone https://github.com/Asr13b/smart-validator.git
cd smart-validator
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test:run
```

## License

MIT
