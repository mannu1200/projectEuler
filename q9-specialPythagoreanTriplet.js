/*
a+b+c = 1000;
and
a^2 + b^2 = c^2;
==>
2(500)^2 + ab = 1000(a+b)
*/
var a,b;
function find(){
	var max_b = 449;max_a = 334;

	for(var i =0; i <= max_b ;i++) {
		for(var j=0; j<=max_a; j++){
			if(satisfyEquation(i,j)){
				a = j;
				b = i;
				return;
			}
		}
	}
}

function satisfyEquation(i,j) {
	if(2*500*500 + i*j === 1000*(i+j))
		return true;
	return false;
}
find();
console.log(a*b*(1000-a-b));
