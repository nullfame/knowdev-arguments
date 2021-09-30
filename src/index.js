const { TYPE } = require("./util/constants");
const validate = require("./functions/validate.function");

//
//
// Convenience functions
//

validate.string = (argument, options) =>
  validate(argument, { type: TYPE.STRING, ...options });

//
//
// Export
//

module.exports = validate;
module.exports.TYPE = TYPE;
