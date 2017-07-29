const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const index = require('./index');

chai.use(sinonChai);
chai.should();

/*
 * I would have liked to have used beforeEach/afterEach to set up spies on console.log/error,
 * but it creates problems with the test reporter. I use the spies to make sure success/failure
 * is being logged appropriately.
 */
describe('Application', function () {
	describe('Success', function () {
		it('should log "correct" if the answer is 3', function () {
			const log = console.log;
			const spy = sinon.spy();
			console.log = spy;
			index.success(3);
			console.log = log;
			spy.should.have.been.calledWith('correct');
		});

		it('should log "wrong anser" if the answer is not 3', function () {
			const log = console.log;
			const spy = sinon.spy();
			console.log = spy;
			index.success(0);
			console.log = log;
			spy.should.have.been.calledWith('wrong answer', 0);
		});
	});

	describe('Failure', function () {
		it('should log the error message to stderr', function () {
			const error = console.error;
			const spy = sinon.spy();
			console.error = spy;
			index.failure('The service was unavailable');
			console.error = error;
			spy.should.have.been.calledWith('error ', 'The service was unavailable');
		});
	});
	
});
