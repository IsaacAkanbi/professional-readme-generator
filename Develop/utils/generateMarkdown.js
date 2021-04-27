// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const renderBadge = `https://img.shields.io/badge/license-${license}-green`;
  
  if(license.license !== "") {
    return `[![badge](${renderBadge})](${renderBadge})`;
  } else {
    return '';
  }
}
// Function that returns the license link
function renderLicenseLink(license) {
  const renderLicenseLink = `https://img.shields.io/badge/license-${license}-green`;
  if(license.license !== "") {
    return '[link](${renderLicenseLink})';
  } else {
    return '';
  }
}
// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
${renderLicenseBadge(data.license)}

# Project Title: ${data.title}

## Table of Contents
1. [Project Title](#project-title-)
2. [Project Description](#project-description-) 
3. [Installation Guide](#Installation-guide-)
4. [Usage](#usability-)
5. [Collaborators](#collaborations-)
6. [License](#license-)
7. [Github username](#questions-)

### Project Description:
${data.description}

### Installation guide: 
${data.installation_instruction}

### Usability:
${data.usage}

### Collaborations: 
${data.credits}

### License: 
${data.license}

### Questions: 
- [github link](http://www.github.com/${data.github}) 
- Contact email: (${data.email})
`;
}

module.exports = generateMarkdown;
