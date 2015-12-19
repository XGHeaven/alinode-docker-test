var http = require('http')

var app = http.createServer(function(req,res) {
	var a = {}

	for (var i = 0; i< 1000; i++) {
		a = {}
		a.time = Date.now()
		res.write(JSON.stringify(a) + '\n')
	}
	res.end('Hello World')
})

app.listen(8080, function() {
	console.log('start success')
})