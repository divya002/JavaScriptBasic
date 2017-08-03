//console.log("hello dp");
var rollingDice=function(dice_size)
{
	var firstNum=Math.ceil((dice_size*Math.random()));
	return firstNum;
}
var result=rollingDice(process.argv[2]);
console.log(result);
//console.log(rollingDice(8));
if(result>(process.argv[2]/2))
{
	console.log("Great roll!!!");
}
else
{
	console.log("Teriffic roll!!!");
}
