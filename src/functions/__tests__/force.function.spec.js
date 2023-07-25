const force = require("../force.function");

//
//
// Run tests
//

describe("Force function", () => {
  describe("Arrays", () => {
    it("Forces arrays", () => {
      const response = force("taco", Array);
      expect(response).toBeArray();
      expect(response).toIncludeSameMembers(["taco"]);
    });
    it("Returns arrays untouched", () => {
      const tacos = ["beef", "chicken"];
      const response = force(tacos, Array);
      expect(response).toBeArray();
      expect(response).toBe(tacos);
    });
  });
  describe("Objects", () => {
    it("Forces objects", () => {
      const response = force("taco", Object);
      expect(response).toBeObject();
      expect(response).toEqual({ value: "taco" });
    });
    it("Forces objects with a key", () => {
      const response = force("taco", Object, "food");
      expect(response).toBeObject();
      expect(response).toEqual({ food: "taco" });
    });
    it("Returns objects untouched", () => {
      const taco = { type: "beef" };
      const response = force(taco, Object);
      expect(response).toBeObject();
      expect(response).toBe(taco);
    });
    it.todo("Parses JSON");
  });
  describe("Strings", () => {
    it.todo("Converts null to 'null'");
    it.todo("Converts objects to JSON");
    it.todo("Runs everything else through toString()");
    it.todo("Returns strings untouched");
  });

  describe("Convenience Functions", () => {
    it("Forces arrays", () => {
      expect(force.array).toBeFunction();
      expect(force.array("taco")).toBeArray();
    });
    it("Forces objects", () => {
      expect(force.object).toBeFunction();
      expect(force.object("taco")).toBeObject();
    });
  });
});
