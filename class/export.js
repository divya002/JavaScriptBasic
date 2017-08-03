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

exports.game=die;
exports.other="Trying to export";