/**
 * Sums the result of two other math services: callOneService and callTwoService
 * 
 * @return {Promise} a promise that will be resolved with the sum of two values returned by callOneService and callTwoService
 */
function remoteMathService() {
	return Promise.all([
		callOneService(),
		callTwoService()
	]).then(([one, two]) => one + two);
}

/**
 * Returns the value 1 as an asynchronous service
 * 
 * @return {Promise} a promise that is resolved with 1 after a period of time
 */
function callOneService() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(1), 1000);
	});
}

/**
 * Returns the value 2 as an asynchronous service
 * 
 * @return {Promise} a promise that is resolved with 2 after a period of time
 */
function callTwoService() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(2), 1500);
	});
}

const services = {
	remoteMathService,
	callOneService,
	callTwoService,
};

module.exports = services;
