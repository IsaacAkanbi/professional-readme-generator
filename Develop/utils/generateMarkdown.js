// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

# Project Title: ${data.title}

## Table of Contents
1. [Project Title](#title)
2. [Project Description](#description) 
3. [Installation Guide](#installation_instruction)
4. [Usage](#usage)
5. [Collaborators](#credits)
6. [License](#license)

##  Project Description: ${data.description}
##  Installation guide: ${data.installation_instruction}
## Usability: ${data.usage}

[Collaborators](http://www.github.com/${data.credits})
![Test Image](${data.link})
`;
}

module.exports = generateMarkdown;
