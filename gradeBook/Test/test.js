var book=require("../lib/grade").book;


exports["can add more number"]= function(test)
{
	book.addGrade(123);
	test.equal(book.tcount,1);
	test.done();
} 
//console.log(book);