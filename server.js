// This code creates an HTTP webserver
//  listening for any request on localhost:3000
// THE CLIENT will make a HTTP request over a TCP/IP socket.
// The client (your web browser, for example) opens a socket,
// connects to this HTTP server via the port number 3000.

// loads the HTTP module
const http = require('http')

// sets the server hostname variable to localhost (127.0.0.1)
const hostname = '127.0.0.1'
// sets the port variable to 3000.
const port = 3000

// creates a server with a callback function
// callback always returns the same response to ANY request
// response status code of 200
// response header of a content type of plain text.
//   sending plain text back to the client in the response
// sending a text response contain the text "Hello World"
const server = http.createServer(function(req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World\n')
})

// This code is the webserver is listening
// for requests on localhost port 3000.
// Defines a callback to print a log message on the
// console when the server has started listening.

server.listen(port, hostname, function() {
	console.log(`Server is up. Open http://${hostname}:${port}/ in your browser`)
})
