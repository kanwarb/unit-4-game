var minCN =19;
var maxCN =120;
var computerNumber = Math.floor(Math.random()*(maxCN - minCN+1)+ minCN); 
var imageValue = [];
var myCrystalsImages = ["assets/images/diamond.jpg", "assets/images/bluesaphire.jpg",'assets/images/lightupcrystal.jpg','assets/images/quartz.jpg'];
var myPoints =0;
var myWins =0;
var myLosses =0;
var condition;

function crystalNumber(){
    var crystalNumber = Math.floor((Math.random() * 12) + 1);
    return crystalNumber;
}

function addImageCrystalToDiv(){
    for(i=0; i < 4; i++){
        imageValue[i] = crystalNumber();
        var imageCrystal = $("<img>");  // add crystal image to the div 
        imageCrystal.addClass("img-thumbnail col-sm-3 col-xs-12  mt-5");
        imageCrystal.attr("id", "crystal-" +i);
        imageCrystal.attr("src", myCrystalsImages[i] );
        imageCrystal.attr( "data-crystal-value", crystalNumber());
        $("#myImages").append(imageCrystal);
    
    }
}

function updateImageCrystalValue() {
    $('.img-thumbnail').each(function(i) {
        $(this).attr('data-crystal-value', crystalNumber());
    })
}    

function playGame(){
    $(".img-thumbnail").on("click", function(e) {
        var imageValue = ($(this).attr("data-crystal-value"));
        imageValue = parseInt(imageValue);
        //$.confetti.stop();
        addmySelectedImageValues(imageValue);
        
     })
}

function addmySelectedImageValues(imageValue){
   
    
    console.log( imageValue);
    myPoints += imageValue;
    $("#myScore").text(myPoints);
    if(myPoints === computerNumber)
    {
        myWins++;
        $("#myWinsId").text(" " + myWins)  ;
        // resetValues();
        animateCSS("W");
        showStatus("bounce");
       // clearTimeout(startConfetti);
        resetValues();
    }
    else if(myPoints > computerNumber){
        
        myLosses++;
        $("#myLossesId").text(" " + myLosses);
        animateCSS("L");
        showStatus("zoomIn");
        // setTimeout( startConfetti, 5000);
        // setTimeout( stopConfetti);
        resetValues();
    }    

}

function startConfetti() {
    $.confetti.start();
}

function stopConfetti() {
    $.confetti.stop();
    $.confetti.clear();
}

function resetValues(){
      console.clear();
      myPoints =0;
      computerNumber = 0;
      imageValue = [];
      myPoints =0;
      myClasses='';

      computerNumber = Math.floor(Math.random()*(maxCN - minCN+1)+ minCN); 
      crystalNumber();
      updateImageCrystalValue();
      $("#playerTotalId").text(computerNumber);
      $("#myScore").text(0);
      // setTimeout(function () {confetti.stop()}, 3000);
      
     
}


function showStatus(x) {
    
    $('#animateCSSId').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
    //var options =  { to: { display: hidden } };
    //$( "#animateCSSId" ).hide( '.js-animation', {display: none}, 1000, callback );
  };

function animateCSS(myResult){

        var animateWin = $("#animateCSSId");
        var myResponse='';
        var animateCSS = $("<div>");
        animateWin.addClass("bounce animated");
        animateWin.attr("display", "show")
        if(myResult == "W")
        {
         animateWin.addClass("bg-success");
         myResponse = "You Won ! ";
        } 
        else if(myResult =="L")
        {
            animateWin.addClass("bg-warning");
            myResponse = "You Lose This round";
        }
      //  animateWin.attr("display" , "block" );
 
        $("h2").text(myResponse);
        

        $('.js--animation').change(function(){
            var anim = $(this).val();
            showStatus("zoomIn");
          });
    

    
    }

$("#playerTotalId").text(computerNumber)
addImageCrystalToDiv();
playGame();



