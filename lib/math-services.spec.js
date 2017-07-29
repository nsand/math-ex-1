const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const mathService = require('./math-services');

chai.use(chaiAsPromised);
chai.should();

describe('Remote Math Services', function () {
	describe('One Service', function () {
		it('should return 1', function () {
			mathService.callOneService().should.eventually.equal(1);
		});
	});

	describe('Two Service', function () {
		it('should return 2', function () {
			mathService.callTwoService().should.eventually.equal(2);
		});
	});

	describe('Remote Math Service', function () {
		it('should return 3', function () {
			mathService.remoteMathService().should.eventually.equal(3);
		});
	});
	
});
