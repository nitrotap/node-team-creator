const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee("Kartik")
    expect(employee.name).toBe("Kartik")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).stringMatching("@")
})

test("gets an employee's name", () => {
    const employee = new Employee("Kartik")
    expect(employee.getName()).toBe("Kartik")
})

test("gets an employee's id", () => {
    const employee = new Employee("Kartik")
    expect(employee.getId()).toEqual(expect.any(Number))
})

test("gets an employee's email", () => {
    const employee = new Employee("Kartik")
    expect(employee.getEmail()).stringMatching("@")
})

test("gets an employee's role", () => {
    const employee = new Employee("Kartik")
    expect(employee.role()).toEqual("Employee")
})