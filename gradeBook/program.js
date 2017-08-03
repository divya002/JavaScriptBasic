var book=require("./lib/grade").book;
var express=require("express");
var app=express();
app.get("/",function(req,res)
{
	res.send("Hello Website");
})

app.get("/grade",function(req,res)
{
	var grade=req.query.grade.split(",");
	for(var i=0;i<grade.length;i+=1)
	{
		book.addGrade(parseInt(grade[i]));
		
	}
	var avg=book.gradeAverage();
	res.send("Average of grade"+avg);
})
app.listen(3001);
console.log("server ready..!!!!");