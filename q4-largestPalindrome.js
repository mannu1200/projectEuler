var g = [];

function largestPalindrome() {
	var largest = 999, smallest = 100;
	for(var i = largest; i>=smallest ; i--) {
		for(var j = i; j>= smallest ; j--) {
//console.log(i, j, isPalindrome(i*j));
			if(isPalindrome(i * j)) {
				console.log(i,j);
//				return (i*j);
				g.push(i*j);
			}
		}
	}
//finding max
var max = g[0];
g.forEach(function(a){
	a > max ? max = a : null;
});
return max;

}
function isPalindrome(number) {
	var
	 str = number.toString(),
	 len = str.length - 1,
	 i = 0;
	while(i < len) {
		if(str[i] != str[len]) {
			return false;
		}
		i++;len--;
	}
	return true
	
}

function test(){
	var largest = 999*999,
		smallest = 580085;
	while(largest > smallest){
		if(isPalindrome(largest--))
			return largest;
	} 
return false;
}

//console.log(test());
console.log(largestPalindrome());
