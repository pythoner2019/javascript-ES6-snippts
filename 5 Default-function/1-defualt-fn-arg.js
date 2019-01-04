const makeAjaxRequest = (url, method = 'GET') => {
	return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
console.log(makeAjaxRequest('google.com', undefined));
console.log(makeAjaxRequest('google.com', null));

// ------------------------------------- //

function User(id) {
	this.id = id
}

function generateId() {
	return Math.random() * 100;
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;

	return user;
}

const user = new User(createAdminUser())
console.log(user);