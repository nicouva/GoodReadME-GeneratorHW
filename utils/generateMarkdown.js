// function to generate markdown for README
function generateMarkdown(data) {

  const badges = ['![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', '(https://opensource.org/licenses/MIT)', '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)', '(https://opensource.org/licenses/MPL-2.0)', '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)', '(https://opensource.org/licenses/Apache-2.0)']
  let badge = ''

  if (data.license === 'MIT') {
    badge = badges[0]
  } else if (data.license === 'MPL') {
    badge = badges[1]
  } else if (data.license === 'Apache') {
    badge = badges[2]
  }
  return `
  # ${data.title}
  ${data.description}
  ***
  ## Table of Contents
  [Installation Instructions](#installation-instructions)
  [Usage Description](#license-information)
  [Contribution Instructions](#contribution-instructions)
  [Testing Procedure](#testing-procedure)
  [Questions](#questions)
  ##Installations Instructions
  ${data.installation}
  ##Usage Description
  ${data.usage}
  ##License Information
  ${data.license}
  ##Contribution Instructions
  ${data.contributions}
  ##Testing Procedures
  ${data.test}
  ##Questions
  If you have any questions, you can reach me at ${data.email} and please follow me on GitHub at https://github.com/${data.username}`;
}

module.exports = generateMarkdown;
