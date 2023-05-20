const licenseBadgeMap = {
  'MIT': 'MIT',
  'Apache-2.0': 'Apache%202.0',
  'GPL-3.0': 'gplv3',
  'BSD-3-Clause': 'BSD%203--Clause',
  'None': 'None'
};

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${licenseBadgeMap[license]}-blue.svg)`;
  }
  return '';
}

//================================================================================================================================

function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License: ${license.toUpperCase()}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
  return '';
}


//================================================================================================================================


function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n\nThis project is under the [${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/).`;
  }
  return '';
}


//================================================================================================================================


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the repo, open an issue or contact [${data.github}](https://github.com/${data.github}/) directly at ${data.email}.
  `;
};

module.exports = generateMarkdown;
