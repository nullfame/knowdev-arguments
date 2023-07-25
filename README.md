# KnowDev Arguments 🧨

## 📋 Usage

``` bash
npm install --save @knowdev/arguments
```

## 📖 Reference

``` javascript
const validate = require("@knowdev/arguments");
const { force } = require("@knowdev/arguments");
const { TYPE } = require("@knowdev/arguments");

validate(argument, {
  type: TYPE.ANY,
  falsy: false,     // When `true`, allows "falsy" values that match the type (e.g., `0`, `""`)
  required: true,   // When `false`, allows `undefined` as a valid value
  throws: true      // When `false`, returns `false` instead of throwing error
})

// force only supports Array and Object
argument = force(argument, Array);
argument = force(argument, Object, "key");
```

### Convenience Functions

``` javascript
validate.array(argument);
validate.class(argument);
validate.function(argument);
validate.null(argument);
validate.number(argument);
validate.object(argument);
validate.string(argument);
validate.undefined(argument);

argument = force.array(argument);
argument = force.object(argument, "key");
```

### Types

#### Constant Types

``` javascript
const { TYPE } = require("@knowdev/arguments");

TYPE.ANY # Default
TYPE.ARRAY
TYPE.CLASS
TYPE.FUNCTION
TYPE.NUMBER
TYPE.NULL
TYPE.OBJECT
TYPE.STRING
TYPE.UNDEFINED
```

#### Intuitive Types

_Does not include any, class, or undefined_

``` javascript
Array
Function
Number
null
Object
String
```

## 🚀 Deployment

`npm publish --access=public`

## 📝 Changelog

| Version | Change |
| ------- | ------ |
| 1.3.0   | `force` supports `Object`
| 1.2.0   | Adds `force`, which only supports `Array`
| 1.1.3   | Adds remaining `validate.type` shortcuts |
| 1.1.2   | Rejects falsy on strings and numbers only |
| 1.1.1   | Rejects falsy |
| 1.1     | Adds `validate.string` shortcut |
| 1.0     | MVP |

## 🛣 Roadmap

See [WISHLIST.md](WISHLIST.md)

## 📜 License

All rights reserved. Safe for use around pets.
