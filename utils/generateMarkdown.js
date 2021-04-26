// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None' ){
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `* [License](#Licenses)`
}
return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## Licenses `}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)} 
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installing the program](#installation)
  * [Using the program](#usage)
  
  ${renderLicenseLink(data.license)}
  * [contribute](#contributing)
  * [contact](#contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribute}
  
  ## Contact
  Reach out to me via email at ${data.email} or through [github](https://github.com/${data.github}) if you have any questions
`;
}

module.exports = generateMarkdown;
