
const backend = localStorage.getItem('backend') || `http://localhost:8081`;

export const post = (url, data = {}) => {

	let headers = {'content-type': 'application/json'}
	if (localStorage.getItem("token")) headers.Authorization = `Bearer ${localStorage.getItem("token")}`

	return fetch(`${backend}${url}`, {
		body: JSON.stringify(data), // must match 'Content-Type' header
		headers,
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
	})
		.then(response => response.json()) // parses response to JSON
		.catch((err) => console.log(err));
};

export const get = async (url) => {

	let headers = {cache: "no-cache"}
	if (localStorage.getItem("token")) headers.Authorization = `Bearer ${localStorage.getItem("token")}`

	const response = await fetch(`${backend}${url}`, {
		headers
	});
	return response.json();
};
