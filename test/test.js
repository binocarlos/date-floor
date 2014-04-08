var datefloor = require('../');

describe('date-floor', function(){

  it('should be a function', function() {
    datefloor.should.be.a('function');
  })

  it('should throw with a bad resolution', function() {


  	(function(){
  		datefloor(new Date('05/06/2014 12:00:00'), 'apples');
		}).should.throw();
    
  })

  describe('should floor to the closest:', function(){

  	function get_start(){
  		return new Date('05/06/2014 11:56:45');
  	}
  	
  	function run_test(resolution, correct){
  		var start = get_start();
  		var test = datefloor(start, resolution);
  		test.getTime().should.equal(correct.getTime());
  	}

	  it('minute', function() {
	    
	    run_test('minute', new Date('05/06/2014 11:56:00'));

	  })

	  it('hour', function() {

	  	run_test('hour', new Date('05/06/2014 11:00:00'));

	  })

	  it('day', function() {

	  	run_test('day', new Date('05/06/2014 00:00:00'));

	  })

	  it('month', function() {

	  	run_test('month', new Date('05/01/2014 00:00:00'));

	  })

	  it('year', function() {

	  	run_test('year', new Date('01/01/2014 00:00:00'));

	  })

	})

})
