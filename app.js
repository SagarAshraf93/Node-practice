const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.end("khoti k bachy");
	} else if (req.url == "/about") {
		res.end("khoti k puter");
	}
	res.end(`<h1>not found</h2>`);
});

server.listen(3000);
