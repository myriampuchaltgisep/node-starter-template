# node-starter-template

## What is this repo for?

It's a template to get your fully set up node project up and running in seconds

## What does it contain?

- ESLint and Prettier (using AirBnB's ruleset) -> Ensures consistent formatting is being applied to the entire project
- Commitlint -> Ensures that git commit messages are consistent
- Jest -> Ensures our project can be tested
- VSCode debugger -> Ensures we can debug the tests and the project separately
- Husky -> Ensures that only formatted code that passes tests is committed
- CircleCI -> Ensures our project has CI set up that scans the code with sonarcloud every time it gets built
- Sonarcloud -> Ensures our code is secure and of high quality

## How do I get started?

This template is used as a base for a new node project

Instructions to create a new repository from a template can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

Once we've gone through the above steps, do the following:

- Update the 'name' property in the package.json file
- [Create a new sonarcloud project](https://sonarcloud.io/projects/create) and add the name to sonar-project.properties
- [Opt-in](https://circleci.com/docs/2.0/orb-intro/) to use of third-party orbs on circleci (Organization Settings > Security > Allow Uncertified Orbs)
- set up sonarcloud on circleci: go to > Organization Settings > Contexts and create a new context called Sonarcloud. Add an environment Variable called SONAR_TOKEN.
- Run nvm use
- Run npm i
- Run npm start

## What commands are available to run?

npm run start: Starts the project
npm run test: Runs the tests once
npm run test:watch: Continuously watches and runs the tests on code changes (cmd+save)
npm run lint: Formats the source code using ESLint
