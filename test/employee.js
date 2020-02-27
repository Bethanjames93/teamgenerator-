const Employee = require("../lib/employee");

test("Can get name via getName()", () => {
    const testValue = "Bethan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Ella", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Ella", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Bethan", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });