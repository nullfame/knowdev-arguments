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
});
