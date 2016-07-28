# turner-developer-challenge

24 hour developer challenge completed for Turner Broadcasting Interview.

You can view this project live on Heroku <https://still-reef-11817.herokuapp.com/>

## Getting started
1. Change to project root directory.
2. Install all dependencies using `npm install`
3. Run server using `npm start` or `node app.js`
4. Visit http://localhost:8080/

Note: `npm install` should also excute `bower install`. In the event of a failure, try running `bower install` manually.

## Running Karma unit tests
1. Change to project root directory.
2. Run test using `npm test`

Note: Assumes you have previously executed `npm install` in the project root directory; required for Karma dependencies found in the node_modules folder.

## Running Protractor end-to-end tests
1. Install Protractor and Selenium Server using the following commands: `npm install -g protractor` and `webdriver-manager update`
2. Run a Selenium Server instance using `webdriver-manager start`
3. Open a new terminal window and run the project using `npm start`
4. Open a final terminal window and run `protractor protractorConf.js`. You must be in the tests-protractors folder.
