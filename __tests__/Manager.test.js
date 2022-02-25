const Manager = require('../lib/Manager.js')

test("creates manager object", () => {
    const manager = new Manager("Kartik", 1, "kartikinpublic@gmail.com", "12")
    expect(manager.name).toBe("Kartik")
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toMatch("@")
    expect(manager.officeNumber).toMatch("12")

    console.log(manager)
})

test("gets manager's office number", () => {
    const manager = new Manager("Kartik", 1, "kartikinpublic@gmail.com", "12")
    expect(manager.getOfficeNumber()).toBe("12")
})

test("gets manager's role", () => {
    const manager = new Manager("Kartik", 1, "kartikinpublic@gmail.com", "12")
    expect(manager.getRole()).toBe("Manager")
})
