// function to generate markdown for README
//ES6 temporal literals uses backticks
function generateMarkdown(data) {
  return `# ${data.Title}
  # GitHub Username
  ## ${data.Username}
  # Email
  ## ${data.Email}

  #### Table of Contents
  #### Description
  * [Description](#Description)
  #### Installation
  * [Installation](#Installation)
  #### License
  * [License](#License)
  #### Usage
  * [Usage](#Usage)
  #### Contribution
  * [Contribution](#Contribution)
  #### Tests
  * [Tests](#Tests)
  
  ## ${data.Name}
  
  ## ${data.Description}
  
  ## ${data.License}
  
  ## ${data.Installation}
  
  ## ${data.Tests}
  
  ## ${data.Usage}
  
  ## ${data.Contribution}

`;
}
module.exports = generateMarkdown;


