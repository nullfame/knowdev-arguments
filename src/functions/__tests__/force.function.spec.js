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
