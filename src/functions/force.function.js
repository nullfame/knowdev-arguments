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
    case TYPE.STRING:
      if (value === null) return "null";
      if (value === undefined) return String(key);
      if (typeof value === "object") return JSON.stringify(value);
      return String(value);
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
force.string = (value, defaultValue = "") => force(value, String, defaultValue);

//
//
// Export
//

module.exports = force;
