$(document).ready(function(){
    var win = 0;
    var a = $('#w');
    a.text(win);

    var lose = 0;
    var b = $('#l');
    b.text(lose);
    
    var comc = 0;
    var c = $('#compc');
    c.text(comc);
    

    var usec = 0;
    var d = $('#userc');
    d.text(usec);
    
    function updateusecwithnum(){
		d.text(usec);
			
	}
    $('#rock1').on('click', function(){
		usec++;
		updateusecwithnum();
    });
    $('#rock2').on('click', function(){
		usec++;
		updateusecwithnum();
    });
    $('#rock3').on('click', function(){
		usec++;
		updateusecwithnum();
    });
    $('#rock4').on('click', function(){
		usec++;
		updateusecwithnum();
    });
    
    
   
			
	
    
});