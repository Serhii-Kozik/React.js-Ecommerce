export const post = (url, data = {}) => {
	return fetch(url, {
		body: JSON.stringify(data), // must match 'Content-Type' header
		headers: { 'content-type': 'application/json' },
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, cors, *same-origin
	})
		.then(response => response.json()); // parses response to JSON
};

export const get = async (url) => {
	const response = await fetch(url);
	return response.json();
};
