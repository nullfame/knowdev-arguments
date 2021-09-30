# KnowDev Arguments 🧨

## 📋 Usage

``` bash
npm install --save @knowdev/arguments
```

## 📖 Reference

``` javascript
const validate = require("@knowdev/arguments");
const { TYPE } = require("@knowdev/arguments");

validate(argument, {
  type: TYPE.ANY,
  falsy: false,
  required: true,
  throws: true
})
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
| 1.1.2   | Rejects falsy on strings and numbers only |
| 1.1.1   | Rejects falsy |
| 1.1     | Adds `validate.string` shortcut |
| 1.0     | MVP |

## 🛣 Roadmap

### Wishlist 🌠

#### More Conveniences

``` javascript
validate.number(argument);
validate.positive(argument);
validate.negative(argument);

validate.lowercase(argument);
validate.uppercase(argument);

validate.array(argument);
validate.class(argument);
validate.function(argument);
validate.null(argument);
validate.object(argument);
validate.undefined(argument);
```

#### More Types

* Date

#### Force Into Required Type

``` javascript
force.array(argument);
force.lowercase(argument);
force.object(argument, { key: "value" });
force.string(argument, { default: "value" });
```

#### Object Paths

``` javascript
validate.path(object, { "id": String });
validate.path(object, { "attributes/count": Number });
```

#### Object Schema

``` javascript
validate.schema(object, {
  "id": Number,
  "model": [String, undefined]
  "attributes": {
    "name": String
  }
});
```

#### Regex

``` javascript
validate.regex(object, /^Taco$/);
```

## 📜 License

All rights reserved. Safe for use around pets.
