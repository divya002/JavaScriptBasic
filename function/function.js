var rollingDice=function(dice_size)
{
	var firstNum=Math.ceil((dice_size*Math.random()));
	return firstNum;
}
console.log(rollingDice(6));
console.log(rollingDice(8));