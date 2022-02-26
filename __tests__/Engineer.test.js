const Engineer = require('../lib/Engineer.js')

test("creates engineer object", () => {
    const engineer = new Engineer("Kartik", 1, "kartikinpublic@gmail.com", "nitrotap")
    expect(engineer.name).toBe("Kartik")
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toMatch("@")
    expect(engineer.gitHub).toMatch("nitrotap")

    console.log(engineer)
})

test("gets engineer's github information", () => {
    const engineer = new Engineer("Kartik", 1, "kartikinpublic@gmail.com", "nitrotap")
    expect(engineer.getGitHub()).toBe("nitrotap")
})

test("gets engineer's role", () => {
    const engineer = new Engineer("Kartik", 1, "kartikinpublic@gmail.com", "nitrotap")
    expect(engineer.getRole()).toBe("Engineer")
})

