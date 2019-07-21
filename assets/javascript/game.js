$(document).ready(function(){

    var c;

    function generaterandomnum(){
      c = Math.floor(Math.random()*100);
    }

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

    function checkNum(n){
        if (c == n){
          $('#w').text('you won');
        }else {
          $('#l').text('you lost');
        }
        $('#compc').text(c);
      }
    
    function updateusecwithnum(){
		d.text(usec);
			
	}
    $('#rock1').on('click', function(){
		// usec++;
        updateusecwithnum();
        generaterandomnum();
      checkNum(1);
    });
    $('#rock2').on('click', function(){
		// usec++;
        updateusecwithnum();
        generaterandomnum();
      checkNum(2);
    });
    $('#rock3').on('click', function(){
		// usec++;
        updateusecwithnum();
        generaterandomnum();
      checkNum(3);
    });
    $('#rock4').on('click', function(){
		// usec++;
        updateusecwithnum();
        generaterandomnum();
      checkNum(4);
    });
    
   
   
			
	
    
});