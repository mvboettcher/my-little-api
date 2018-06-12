const http = require('http')
const port = process.env.PORT || 3000

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' })

	response.write('<html>')
	response.write('<body>')
	response.write('<h2>Request Info is on its way!</h2>')
	response.write('<p>' + request.method + '</p>')
	response.write('<h3>Host</h3>')
	response.write('<p>' + request.headers.host + '</p>')
	response.write('<h3></h3>')
	response.write('<p></p>')
	response.write('<h3></h3>')
	response.write('<p></p>')
})

server.listen(port, () => console.log('opened server on', server.address()))
