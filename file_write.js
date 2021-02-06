var fs = require('fs');

var data = 'my first data... \r\nhello';

fs.writeFile('file.txt', data, 'utf-8', function(e){
	if (e)
	{
		console.log(e);
	}else{
		console.log('done');
	}
});


try{
	fs.writeFileSync('file2.txt',data, 'utf-8');
	console.log('02donee');
}catch(e){
	console.log(e);
}