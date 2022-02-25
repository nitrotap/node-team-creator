const Employee = require('../lib/Employee.js')

test("creates employee object", () => {
    const employee = new Employee("Kartik", 1, "kartikinpublic@gmail.com")
    expect(employee.name).toBe("Kartik")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toMatch("@")
    console.log(employee)
})

test("gets an employee's name", () => {
    const employee = new Employee("Kartik", 1, "kartikinpublic@gmail.com")
    expect(employee.getName()).toBe("Kartik")
})

test("gets an employee's id", () => {
    const employee = new Employee("Kartik", 1, "kartikinpublic@gmail.com")
    expect(employee.getId()).toEqual(expect.any(Number))
})

test("gets an employee's email", () => {
    const employee = new Employee("Kartik", 1, "kartikinpublic@gmail.com")
    expect(employee.getEmail()).toMatch("@")
})

test("gets an employee's role", () => {
    const employee = new Employee("Kartik", 1, "kartikinpublic@gmail.com")
    expect(employee.getRole()).toEqual("Employee")
})