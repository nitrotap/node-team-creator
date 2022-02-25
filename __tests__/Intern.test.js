const Intern = require('../lib/Intern.js')

test("creates intern object", () => {
    const intern = new Intern("Kartik", 1, "kartikinpublic@gmail.com", "University of Pittsburgh")
    expect(intern.name).toBe("Kartik")
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toMatch("@")
    expect(intern.school).toMatch("University")

    console.log(intern)
})

test("gets intern's school information", () => {
    const intern = new Intern("Kartik", 1, "kartikinpublic@gmail.com", "University of Pittsburgh")
    expect(intern.getSchool()).toBe("University of Pittsburgh")
})

test("gets intern's role", () => {
    const intern = new Intern("Kartik", 1, "kartikinpublic@gmail.com", "nitrotap")
    expect(intern.getRole()).toBe("Intern")
})
