const { TYPE } = require("../util/constants");

//
//
// Main
//

const force = (value, type, key = "value") => {
  switch (type) {
    case TYPE.ARRAY:
      if (!Array.isArray(value)) return [value];
      return value;
    case TYPE.OBJECT:
      if (typeof value !== "object") return { [key]: value };
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
force.object = (value, key) => force(value, Object, key);

//
//
// Export
//

module.exports = force;
