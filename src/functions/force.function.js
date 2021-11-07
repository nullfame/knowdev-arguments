const { TYPE } = require("../util/constants");

//
//
// Main
//

const force = (value, type) => {
  switch (type) {
    case TYPE.ARRAY:
      if (!Array.isArray(value)) return [value];
      return value;
    default:
      throw TypeError(`Unsupported type, "${type}"`);
  }
};

//
//
// Convenience Functions
//

force.array = (value) => force(value, Array);

//
//
// Export
//

module.exports = force;
