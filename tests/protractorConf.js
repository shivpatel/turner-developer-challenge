exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['protractorTest.js'],

    multiCapabilities: [{
        'browserName': 'chrome',
        // browser-specific tests
        specs: 'chromeTests/*'
    }, {
        'browserName': 'firefox',
        // run tests in parallel
        shardTestFiles: true
    }],

    baseUrl: 'http://localhost:8080',
};
