$(function(){
 var ageInput = parseInt(prompt("Enter your age"));
 if(ageInput <18){
   $("#minor").show();
 } else{
   $("#voter").show();
 }

});
