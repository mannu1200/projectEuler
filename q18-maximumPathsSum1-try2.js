var FS = require('fs');

function TreeNode(opts) {
	var 
		value = opts.value, 
		left = opts.left, 
		right = opts.right;
}

function createTree() {
	var 
		filePath = './tree.txt';

	FS.readFile(filePath, 'utf8',function(err, data) {
		//no error handling
		var lines = data.split('\n');
	
		lines.forEach(function(line){
			var numbers = line.split(' ');
			console.log(numbers.length);
		});
		
//		console.log(lines);
	});
}

createTree();
