var gradeBook=
{
_grade:[],
tcount: 0,
addGrade:function(num)
{
	this._grade.push(num);
	this.tcount=+1;
},
gradeAverage:function()
{
	var sum=0;
	for(var i=0;i<this._grade.length;i++)
	{
		sum+=this._grade[i];
	}
	var average=sum/(this._grade.length);
	return average;
}
};
 
exports.book=gradeBook;