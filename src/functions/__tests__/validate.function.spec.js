const HTTP = require("@knowdev/http");
const { TYPE } = require("../../util/constants");

const validate = require("../validate.function");

//
//
// Mock constants
//

const TEST = {
  CLASS: class {},
  FUNCTION: () => true,
};

//
//
// Run tests
//

describe("Validate function", () => {
  it("Works", () => {
    const value = "hello";
    const response = validate(value);
    expect(response).toBeTrue();
  });

  describe("Return true", () => {
    it("Checks array", () => {
      const value = ["hello"];
      const response = validate(value, { type: Array });
      expect(response).toBeTrue();
    });
    it("Checks class", () => {
      const response = validate(TEST.CLASS, { type: TYPE.CLASS });
      expect(response).toBeTrue();
    });
    it("Checks function", () => {
      const response = validate(TEST.FUNCTION, { type: Function });
      expect(response).toBeTrue();
    });
    it("Checks number", () => {
      const value = 12;
      const response = validate(value, { type: Number });
      expect(response).toBeTrue();
    });
    it("Checks null", () => {
      const value = null;
      const response = validate(value, { type: null });
      expect(response).toBeTrue();
    });
    it("Checks object", () => {
      const value = {};
      const response = validate(value, { type: Object });
      expect(response).toBeTrue();
    });
    it("Checks string", () => {
      const value = "hello";
      const response = validate(value, { type: String });
      expect(response).toBeTrue();
    });
    it("Checks undefined", () => {
      const response = validate(undefined, { type: TYPE.UNDEFINED });
      expect(response).toBeTrue();
    });
  });
  describe("Exclude cases", () => {
    it("Check class excludes function", () => {
      const response = validate(TEST.FUNCTION, {
        type: TYPE.CLASS,
        throws: false,
      });
      expect(response).toBe(false);
    });
    it("Check function excludes class", () => {
      const response = validate(TEST.CLASS, { type: Function, throws: false });
      expect(response).toBe(false);
    });
    it("Check number excludes strings of numbers", () => {
      const value = "12";
      const response = validate(value, { type: Number, throws: false });
      expect(response).toBe(false);
    });
    it("Check object excludes array", () => {
      const value = [];
      const response = validate(value, { type: Object, throws: false });
      expect(response).toBe(false);
    });
    it("Check object excludes null", () => {
      const value = null;
      const response = validate(value, { type: Object, throws: false });
      expect(response).toBe(false);
    });
  });
  describe("Return false", () => {
    it("Checks array", () => {
      const response = validate(undefined, { type: Array, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks class", () => {
      const response = validate(undefined, { type: TYPE.CLASS, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks function", () => {
      const response = validate(undefined, { type: Function, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks number", () => {
      const response = validate(undefined, { type: Number, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks null", () => {
      const response = validate(undefined, { type: null, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks object", () => {
      const response = validate(undefined, { type: Object, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks string", () => {
      const response = validate(undefined, { type: String, throws: false });
      expect(response).toBeFalse();
    });
    it("Checks undefined", () => {
      const response = validate(null, { type: TYPE.UNDEFINED, throws: false });
      expect(response).toBeFalse();
    });
  });
  describe("Additional features", () => {
    it("Throws errors by default", () => {
      try {
        validate(null);
      } catch (error) {
        expect(error.isProjectError).toBeTrue();
        expect(error.status).toBe(HTTP.CODE.BAD_REQUEST);
      }
    });
    it.only("Accepts when not required", () => {
      const response = validate(undefined, { type: String, required: false });
      expect(response).toBeTrue();
    });
  });
  describe("Error cases", () => {
    it("Throws if type is bogus", () => {
      try {
        validate(null, { type: "tacos" });
      } catch (error) {
        expect(error.isProjectError).toBeTrue();
        expect(error.status).toBe(HTTP.CODE.INTERNAL_ERROR);
      }
      expect.assertions(2);
    });
  });
});
