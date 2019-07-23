/*
Q1:
Check if jQuery is loaded
*/

$(document).ready(function() {
    $('#q1').html('Hello jouza to JQuery');
})


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$("#scroll").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
});


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$( "#btn1" ).click(function() {
    $( "#box" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "30px",
      width: '30px'
    }, 5000 );
  });

  $( "#btn2" ).click(function() {
    $( "#box" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "150px",
      width: '150px'
    }, 5000 );
  });


/*
Q4:
Learn how to fadein your boxes
*/

$("#fade").click(function(){
    $("#div1").fadeIn();
  });

  $("#fade").click(function(){
    $("#div2").fadeIn();
  });

  $("#fade").click(function(){
    $("#div3").fadeIn();
  });


/*
Q5:
User must first accept then he or she can signup
*/

$('#accept').click(function() {
  if ($('#accept').attr('checked'))
  {}
  $('#submitbtn').prop('disabled', false);
});

// $(function() {
//     $('#accept').on('click', function() {
//         $('#submitbtn').submit();
//     }); 
// })

// $("input[type=checkbox][checked]").each( 
//     function() { 
//         $('#accept').on('click', function() {
//              $('#submitbtn').submit();
//         }); 
//     } 
// );




/*
Q6:
Let them print
*/

$('.printPage').click(function() {
  window.print();
})


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

$('textarea').attr('maxlength', "20")


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/

$('.boldPara').css({ 'font-weight': 'bold' });



/*
Q9:
Add new div to your website
*/

$("#newDiv").click(function(){
  $("div").append(" Hello World.");
});


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/

$("#btnclick").click(function(){
  $("ul").append("<li>Moath Gharib</li>");
});


/*
Q12:
Know what user puts into textbox
*/


$("#usertext").on("change", function () {
  var yourfieldvalue = $('#usertext').val();
  console.log(yourfieldvalue);
});


/*
Q13:
Change input value
*/

$('#button').val("Moath Gharib");

$('#scroll').val("sbane5");


// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 