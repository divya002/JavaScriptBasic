var die={
	size:6,
	count:2,
	roll:function(dice_size)
{
	var firstNum=Math.ceil((dice_size*Math.random()));
	return firstNum;
}
};
console.log(die.size); 
console.log(die.roll(9));