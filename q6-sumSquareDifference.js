function sumOfSquare(n){
	return n*(n+1)*(2*n+1)/6;

}

function squareOfSum(n){
	return (n*(n+1)/2)*(n*(n+1)/2);
}

console.log(squareOfSum(100) - sumOfSquare(100));
