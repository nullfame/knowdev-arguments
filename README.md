# KnowDev Arguments ๐งจ

## ๐ Usage

``` bash
npm install --save @knowdev/arguments
```

## ๐ Reference

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

argument = force(argument, Array);
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

## ๐ Deployment

`npm publish --access=public`

## ๐ Changelog

| Version | Change |
| ------- | ------ |
| 1.2.0   | Adds `force`, which only supports `Array`
| 1.1.3   | Adds remaining `validate.type` shortcuts |
| 1.1.2   | Rejects falsy on strings and numbers only |
| 1.1.1   | Rejects falsy |
| 1.1     | Adds `validate.string` shortcut |
| 1.0     | MVP |

## ๐ฃ Roadmap

See [WISHLIST.md](WISHLIST.md)

## ๐ License

All rights reserved. Safe for use around pets.
