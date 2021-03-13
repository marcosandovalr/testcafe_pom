# TestCafe project with Page Object Model

This Automation project will validate the following AUT:
`https://www.saucedemo.com/`

### Prerequisites

1. A `Github` account for cloning and managing this repository files.
2. Install `node.js` + `npm` for JavaScript runtime environment and package manager.
```
$ npm install -g npm
```
3. Install `testcafe` as end-to-end and open source automation tool.
```
$ npm install -g testcafe
```

### Running tests

1. Clone repository to desired folder
```
$ git clone https://github.com/marcosandovalr/testcafe_pom.git
```

2. Run the tests typing into the console or terminal 
```
$ npm run test-all-chrome
```

or for just one test
```
$ testcafe <browser_name> './page_model/tests/<test_name>.js'
```
