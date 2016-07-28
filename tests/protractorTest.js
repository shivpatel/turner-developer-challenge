var homepage = {
    query: element(by.model('query')),
    resultCount: element(by.id('queryResultCount')),
    get: function() {
        browser.get('/');
    },
    setQuery: function(txt) {
        this.query.sendKeys(txt);
    }
};

describe('turner title finder homepage', function() {
    it('should search and filter correct results', function() {
        homepage.get();
        homepage.setQuery('Forrest Gump');
        expect(homepage.resultCount.getText()).toEqual('1');
    });
});
