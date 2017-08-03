//console.log("hello dp");
var rollingDice=function(dice_size)
{
	var firstNum=Math.ceil((dice_size*Math.random()));
	return firstNum;
}
console.log(rollingDice(process.argv[2]));
//console.log(rollingDice(8));