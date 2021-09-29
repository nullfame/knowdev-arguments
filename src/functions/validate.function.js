const { BadRequestError, ConfigurationError } = require("@knowdev/errors");
const { TYPE } = require("../util/constants");

//
//
// Helper Functions
//

//
//
// Main
//

const validate = (
  argument,
  { type = TYPE.ANY, required = true, throws = true } = {}
) => {
  //
  //
  // Setup
  //
  const isUndefined = argument === undefined;
  let matchesType = false;
  let valid = false;

  //
  //
  // Check Type
  //
  switch (type) {
    case TYPE.ANY:
      matchesType = true;
      break;
    case TYPE.ARRAY:
      if (Array.isArray(argument)) matchesType = true;
      break;
    case TYPE.CLASS:
      if (typeof argument === "function") {
        try {
          // eslint-disable-next-line new-cap, no-new
          new argument();
          matchesType = true;
        } catch (e) {
          matchesType = false;
        }
      }
      break;
    case TYPE.FUNCTION:
      matchesType = typeof argument === "function";
      if (typeof argument === "function") {
        try {
          // eslint-disable-next-line new-cap, no-new
          new argument();
          matchesType = false;
        } catch (e) {
          matchesType = true;
        }
      }
      break;
    case TYPE.NUMBER:
      matchesType = typeof argument === "number";
      break;
    case TYPE.NULL:
      matchesType = argument === null;
      break;
    case TYPE.OBJECT:
      matchesType = typeof argument === "object";
      matchesType = matchesType && argument !== null;
      matchesType = matchesType && !Array.isArray(argument);
      break;
    case TYPE.STRING:
      matchesType = typeof argument === "string";
      break;
    case TYPE.UNDEFINED:
      matchesType = argument === undefined;
      break;

    default:
      throw ConfigurationError(`Unknown validate type "${type}"`);
  }

  //
  //
  // Determine Valid
  //
  valid = matchesType;
  // If it is required
  if (required) {
    // As long as the type isn't undefined
    if (type !== TYPE.UNDEFINED) {
      valid = valid && !isUndefined;
    }
    // Otherwise (not required) allow undefined
  } else if (argument === undefined) valid = true;

  //
  //
  // Throw?
  //
  if (!valid && throws) {
    throw BadRequestError(`Argument "${argument}" doesn't match type "${type}`);
  }

  //
  //
  // Return
  //
  return valid;
};

//
//
// Export
//

module.exports = validate;
