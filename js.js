//Borrowing some code from previous homework assignment solutions.



//==========Arrays, Objects and Variables===========

var numbers = [];
var strings = [];
var numCount;
var sum;
var stringCount;
var stringConcat;


//============FUNCTION DECLARATION=======================

ProcessForm();
Reset();
DisplayNumStats();
DisplayConcat();



//==============EVENTS=====================

 
$('#submit').on( 'click', ProcessForm );
$('#submit').on( 'click', DisplayNumStats );
$('#submit').on( 'click', DisplayConcat );

//TO DO -add other functions kicking off: DisplayNumStats();, DisplayConcat();

$('#reset').on( 'click', Reset );


//================FUNCTIONS==========================
 
 function ProcessForm( evt ) {
    var val = $('#field').val();
 
     if ( $.isNumeric( val) == true ) {
        numbers.push(val);
    } else {
        strings.push(val);
    }
   
   $('#form')[0].reset();
  
    console.log(val);
    console.log(numbers);
    console.log(strings);
}

function DisplayNumStats( evt){
    var numCount = numbers.length;

    var numSum = 0;
    for ( i = 0; i < numCount; ++i ) {
      //converting array into number to avoid concatenation
        numSum += parseInt(numbers[ i ]);
    }

    if ( numCount > 0 ) {
        var average = numSum / numCount;
    } else {
        average = undefined;
    }
 
    document.getElementById("numCount").innerHTML = numCount;
    document.getElementById("numSum").innerHTML = numSum;
    document.getElementById("average").innerHTML = average;
}

function DisplayConcat( evt ){
     var stringCount = strings.length;
    
     document.getElementById("stringCount").innerHTML = stringCount;
 
    var concat = [];
    for ( i = 0; i < stringCount; ++i ) {
        concat += strings[ i ];
    }
 
    document.getElementById("concat").innerHTML = concat;

}

function Reset( evt ){
    numbers = [];
    strings = [];
    DisplayNumStats( );
    DisplayConcat();
 
}
