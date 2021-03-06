(function() {
  describe('parseFromString tests', function() {
    context('ignores safe patterns', function() {
      context(null, function () {
	var good = 'var a = "parseFromString";';
	it(good, function(){
	  chai.expect(ScanJS.scan(good, ScanJS.rules, document.location.pathname)).to.be.empty;
	});
      });
      context(null, function () {
	var good = 'doc = parser.parseFromString("<h1>somehtml</h1>", "text/html");';
	it(good, function(){
	  chai.expect(ScanJS.scan(good, ScanJS.rules, document.location.pathname)).to.be.empty;
	});
      });
    });
    context('detects dangerous patterns', function() {
      context(null, function () {
	var bad = 'doc = parser.parseFromString(someVar, "text/html");';
	it(bad, function(){
	  chai.expect(ScanJS.scan(bad, ScanJS.rules, document.location.pathname)).not.to.be.empty;
	});
      });
    });
  });
})();
