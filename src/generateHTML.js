/* on a single html page, generate a single card for each employee */

const generatePage = function (cardSection, teamName) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
        <!-- Styles -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css"
          integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

    
        <title>${teamName}</title>
      </head>
    
      <body class="container">
        <header class="row d-flex justify-content-center bg-dark text-light">
          <h1 class="">${teamName}</h1>
        </header>
    
        <main class="row d-flex justify-content-center">
            ${cardSection}
        
        </main>
      </body>
    </html>
    `
}

const generateCard = function (employee) {
  return `
    <article
    class="employee-card border border-dark rounded"
    style="margin: 10px"
  >
    <div class="employee-name bg-dark text-light">
      <h4 style="padding: 10px">${employee.getName()}</h4>

      <h4 style="padding: 10px">${generateIcon(employee)}  ${employee.getRole()}</h4>

    </div>
    <div class="employee-info">
      <h6 style="padding: 10px">ID: ${employee.getId()}</h6>
      <h6 style="padding: 10px">
        Email:
        <a href="mailTo:${employee.getEmail()}">${employee.getEmail()}</a>
      </h6>
      <h6 style="padding: 10px">
        ${generateRoleSection(employee)}
      </h6>
    </div>
  </article>
`
}

const generateIcon = function (employee) {
  switch (employee.getRole()) {
    case "Manager":
      return `<i class="bi bi-bag"></i>`
      break;

    case "Engineer":
      return `<i class="bi bi-gear"></i>`
      break;

    case "Intern":
      return `<i class="bi bi-calculator"></i>`
      break;

    default:
      return ``
      break;
  }
}

const generateRoleSection = function (employee) {
  switch (employee.getRole()) {
    case "Manager":
      return `Office Number: ${employee.getOfficeNumber()}`
      break;

    case "Engineer":
      return `GitHub: <a href="https://www.github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a>`
      break;

    case "Intern":
      return `School: ${employee.getSchool()}`
      break;

    default:
      return `Role: Employee`
      break;
  }
}

module.exports = { generateCard, generatePage };

