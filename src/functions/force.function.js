const { TYPE } = require("../util/constants");

//
//
// Main
//

const force = (value, type, key = "") => {
  switch (type) {
    case TYPE.ARRAY:
      if (!Array.isArray(value)) return [value];
      return value;
    case TYPE.OBJECT:
      if (!key) key = "value"; // eslint-disable-line no-param-reassign
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
force.object = (value, key = "value") => force(value, Object, key);

//
//
// Export
//

module.exports = force;
