const remoteMathService = require('./lib/math-services').remoteMathService;

/**
 * The remote service was called successfully
 * @param {Number} answer the result of the remote math service
 */
function success(answer) {
	if (answer !== 3) {
		console.log('wrong answer', answer);
	} else {
		console.log('correct');
	}
}

/**
 * The remote service was called unsuccessfully
 * @param {*} err 
 */
function failure(err) {
	console.error('error ', err);
}

module.exports = {
	success,
	failure,
};

remoteMathService().then(success, failure);
