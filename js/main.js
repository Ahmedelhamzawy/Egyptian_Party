var navWidth = $('.sideBar').innerWidth(); //to get the width of side navigvation bar
    $(document).ready(function() {
        $('#home li a').click(function(e) {
            
            var targetHref = $(this).attr('href');
            
          $('html, body').animate({
              scrollTop: $(targetHref).offset().top
          }, 1500);
          
        
        });
      });
$('.closebtn').click(function(){
    $('.open').animate({'margin-left':0},1000)
        $('.sideBar').animate({"left":-navWidth},1000);   //animate the left position value by -ve the width of the navbar so it seem to be hidden
        $('.pos').animate({"margin-left":0},1000);        //change the left margin by same value of motoin of navbar to seem responsive
    
})
$('.open').click(function(){
    $('.open').animate({'margin-left':navWidth},1000)
        $('.sideBar').animate({"left":"0px"},1000);        //animate the left position value by zero so it seem to be shown
        $('.pos').animate({"margin-left":navWidth},1000); //change the left margin by same value of motoin of navbar to seem responsive
  
})

$('#singers h3').eq(0).click(function(){
    $('#singers div').eq(0).slideToggle(1000);
    $('#singers div').eq(1).slideUp(1000);
    $('#singers div').eq(2).slideUp(1000);
    $('#singers div').eq(3).slideUp(1000);
})
$('#singers h3').eq(1).click(function(){
    $('#singers div').eq(1).slideToggle(1000);
    $('#singers div').eq(0).slideUp(1000);
    $('#singers div').eq(2).slideUp(1000);
    $('#singers div').eq(3).slideUp(1000);
})
$('#singers h3').eq(2).click(function(){
    $('#singers div').eq(2).slideToggle(1000);
    $('#singers div').eq(1).slideUp(1000);
    $('#singers div').eq(0).slideUp(1000);
    $('#singers div').eq(3).slideUp(1000);
})
$('#singers h3').eq(3).click(function(){
    $('#singers div').eq(3).slideToggle(1000);
    $('#singers div').eq(1).slideUp(1000);
    $('#singers div').eq(2).slideUp(1000);
    $('#singers div').eq(0).slideUp(1000);
})

function adjustTimer(month,day,year){
    var currentDate= new Date();
    var startDate = new Date(`${month}/${day}/${year}`);

    var milliSeconds=startDate.getTime()-currentDate.getTime();
    var days=milliSeconds/(1000 * 3600 * 24);
    var remainderDay=days-Math.floor(days);
    days=Math.floor(days);

    var hours=remainderDay*24;
    var remainderHours=hours-Math.floor(hours);
    hours=Math.floor(hours);

    var minutes=remainderHours*60;
    var remainderMinutes=minutes-Math.floor(minutes);
    minutes=Math.floor(minutes)

    var seconds=Math.floor(remainderMinutes*60);
    
    $('.days h3').html(`${days} days`);
    $('.hours h3').html(`${hours} hours`);
    $('.minutes h3').html(`${minutes} minutes`);
    $('.seconds h3').html(`${seconds} seconds`);
}
function operateTimer(){
adjustTimer(07,12,2023);
setTimeout(operateTimer,1000);
}
operateTimer();
$('.text-area').keyup(function(){
    
    var textLength=document.getElementById('exampleFormControlTextarea1').value.length;
    if(textLength>=100){
        $('#charac-count').html('No');
    }else{
    $('#charac-count').html(100-(textLength));
    }
   
})
$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible');
    });
})