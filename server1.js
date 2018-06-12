const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer(function(request, response) {
	const method = request.method
	const url = request.url

	response.statusCode = 200
	response.writeHead(200, { 'Content-Type': 'application/json' })

	const responseBody = { method, url, jp: 'says hi!' }
	response.write(JSON.stringify(responseBody))

	response.end()
})

server.listen(port, '127.0.0.1', function() {
	console.log('API is up!', server.address(), port)
})
