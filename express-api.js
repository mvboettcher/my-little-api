const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', function(req, res) {
	res.send('Express says "wubba lubba dub dub!"')
})

app.get('/cats', function(req, res) {
	res.send('Express says you requested cats.')
})

app.listen(port, () => console.log('API Server is up on port', port))
