# stars

![version](https://img.shields.io/badge/version-1.0.1-blue) ![version](https://img.shields.io/badge/i_love-anagrams-29ff38)

Generate stars super easily with this library!

## Installation

Use the package manager [npm]() to install stars.

```bash
npm install @marlowemarlowe/stars
```

## Usage

```javascript
const { generate } = require("@marlowemarlowe/stars");

// generate 1000 lines
console.log(generate(1000));

// generate 1000 with a frequency of 5
console.log(generate(1000, 5));

// generate 1000 with a frequency of 5 and a length of 10
console.log(generate(1000, 5, 80));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
