function generateMarkdown(data, userDetails) {
  return `

# ${data.UserName}
# ${data.Title}

# Description

${data.Description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command: ${data.Installation}
## Usage
​This application is used for ${data.Usage}
## License
This project is license under the ${data.License} license.
## Contributing
 ${data.Contributor}
## Tests
To run tests, you need to run the following command: ${data.Test}
## Questions
If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
![my profile picture](${userDetails.data.avatar_url})
`;
}

module.exports = generateMarkdown;
