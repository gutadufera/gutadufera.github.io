describe("Sum,Multiply, reversed and longword", function() {

  it("the sum of the numbers are", function() {
    assert.equal([1,2,3,4,5].reduce(sum), 15);
   
  });

 
 it("the multiple of the numbers are", function() {
    assert.equal([1,2,3,4,5].reduce(mul), 120);
   
  });	
	
it("the reversed string is:", function() {
    assert.equal(reverse("abcde"), "edcba");
   
  });
	
	it("Words greater than the given length:", function() {
    assert.equal(longword(["Ati", "Haile" ], 3),  "Haile");
   
  });
	
});