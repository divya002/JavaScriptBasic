var die={
	size:6,
	count:0,
	roll:function()
{
	var firstNum=Math.ceil((this.size*Math.random()));
	this.count+=1;
	return firstNum;
	
}
     
};
die.size=10;
console.log(die.size);
console.log(die.roll());
console.log(die.roll());
console.log(die);
console.log(die.count);