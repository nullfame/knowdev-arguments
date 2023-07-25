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
    it.todo("Forces objects");
    it.todo("Returns objects untouched");
  });

  describe("Convenience Functions", () => {
    it("Forces arrays", () => {
      expect(force.array).toBeFunction();
      expect(force.array("taco")).toBeArray();
    });
    it.todo("Forces objects");
  });
});
