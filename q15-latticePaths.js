var paths = 0;
var mem = {};

function main(i,j,n){
	var str = i + ':' + j;
	if(mem[str]){
		console.log('found in memory',str);
		paths = paths+mem[str];
		return mem[str];
	}
	var right =0,down = 0;
	if(i < n) {
		//move right
		var right = main(i+1, j, n);	
	}
	if(j < n) {
		//move down
		var down = main(i, j+1, n);
	}
	if(i == n && j == n) {
		mem[str] = right + down;
		paths++;
		return 1;
	}

	mem[str] = right + down;
	return (right + down)
}

main(0,0,20);
console.log(paths);
