describe("Banna, Teacher, Sorted Array", function() {

  
	it("the string after removed the bann word:", function() {
    assert.equal("This house is not nice!".filter("not"), "This house is nice!");
   
  });

	it("After an object called Teacher derived from the Person class ::", function() {
    assert.equal(teacher.teach(" WAP"), "Ati Haile is now teaching WAP");
   
  });
	
	
it("Array after sorted :", function() {
    assert.equal(JSON.stringify([6, 4, 0, 3, -2, 1].bubbleSort()), JSON.stringify([ -2, 0, 1, 3, 4, 6 ]));
   
  });	
});