const validate = require("../index");
const { TYPE } = require("../index");

//
//
// Mock constants
//

//
//
// Mock modules
//

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
});

//
//
// Run tests
//

describe("Validate Package", () => {
  it("Validate function", () => {
    const value = "hello";
    const response = validate(value);
    expect(response).toBeTrue();
  });
  it("Validate constants", () => {
    expect(TYPE.STRING).toBe(String);
  });
  describe("Convenience Functions", () => {
    it("Validates arrays", () => {
      const value = [12];
      const response = validate.array(value);
      expect(response).toBeTrue();
    });
    it("Validates classes", () => {
      const value = class {};
      const response = validate.class(value);
      expect(response).toBeTrue();
    });
    it("Validates functions", () => {
      const value = () => {};
      const response = validate.function(value);
      expect(response).toBeTrue();
    });
    it("Validates nulls", () => {
      const value = null;
      const response = validate.null(value);
      expect(response).toBeTrue();
    });
    it("Validates numbers", () => {
      const value = 12;
      const response = validate.number(value);
      expect(response).toBeTrue();
    });
    it("Validates objects", () => {
      const value = {};
      const response = validate.object(value);
      expect(response).toBeTrue();
    });
    it("Validates strings", () => {
      const value = "hello";
      const response = validate.string(value);
      expect(response).toBeTrue();
    });
    it("Validates undefined", () => {
      const value = undefined;
      const response = validate.undefined(value);
      expect(response).toBeTrue();
    });

    it("Allows options", () => {
      const response = validate.string(undefined, { required: false });
      expect(response).toBeTrue();
    });
  });
});
