var fs = require('fs');

fs.readFile('NodeClass.js', 'utf-8', function(error,data){
	console.log('01 readAsync: %s', data);
});

var data = fs.readFileSync('call_timer.js','utf-8');
console.log('02 readSync: %s', data);