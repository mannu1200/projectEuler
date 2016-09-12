function sol2() {
	var a=1,b=2,temp,sum=2,counter = 2;

	while(b<=4000000) {
		temp = b;
		b = a + b;
		a = temp;

		if(b %2 === 0) {
			sum += b;
		}
	}
	console.log('result------------------------>',sum);
}
sol2();
