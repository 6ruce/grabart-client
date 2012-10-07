GRABART.test = {};
('[tests.application]')
('[tests.widget]')

GRABART.TestsSuit = function () {
	this.run = function () {
		console.log('TestSuit running...');
		GRABART.test.widget.run(this);
		GRABART.test.application.run(this);
	};

	this.test = function (testCase, funcName) {
		try {
			testCase(this);
			console.log('+ `' + funcName + '` success +')
		} catch (failure) {
			console.log('- `' + funcName + '` failed: "'+ failure +'" -');
		}
	};

	this.getDummy = function (testMethod, template) {
		var dummy = template || {};

		if (typeof(testMethod) === "string") {
			dummy[testMethod] = function () { dummy[testMethod].runned = true };
		} else {
			for (var i in testMethod) {
				(function (i) {
					dummy[testMethod[i]] = function () { dummy[testMethod[i]].runned = true;};
				}(i));
			}
		}
		return dummy;
	};

	this.assertEquals = function (actual, expected) {
		if (actual != expected) {
			throw '"' + actual + '" is not as expected "' + expected + '"';
		}
	};

	this.assertRunned = function (func, funcName) {
		if (! func.runned) {
			throw '`' + funcName + '` not runned';
		}
	}
};