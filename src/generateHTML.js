/*
 * 
 * on a single html page, generate a single card for each employee
*/

const generatePage = function (args) {
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
        <link rel="stylesheet" href="./assets/css/styles.css" />
    
        <title>${teamName}</title>
      </head>
    
      <body class="container">
        <header class="row d-flex justify-content-center">
          <h1 class="">${teamName}</h1>
        </header>
    
        <main class="row">
            ${generateCardSection(employee)}
        
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
      <h4 style="padding: 10px">${employee.name}</h4>
      <h4 style="padding: 10px">${employee.role}</h4>
    </div>
    <div class="employee-info">
      <h6 style="padding: 10px">ID: ${employee.id}</h6>
      <h6 style="padding: 10px">
        Email:
        <a href="mailTo:${employee.email}">${employee.email}</a>
      </h6>
      <h6 style="padding: 10px">
        ${employee.role.function}: ${employee.role.special}
      </h6>
    </div>
  </article>
`
}

const generateCardSection = function (employeeArray) {

}



