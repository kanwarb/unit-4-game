
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
        imageCrystal.addClass("img-rounded col-sm-3 col-xs-12  mt-4");
        imageCrystal.attr("id", "crystal-" +i);
        imageCrystal.attr("src", myCrystalsImages[i] );
        imageCrystal.attr( "data-crystal-value", crystalNumber());
        $("#myImages").append(imageCrystal);
    
    }
}

function updateImageCrystalValue() {
    $('.img-rounded').each(function(i) {
        $(this).attr('data-crystal-value', crystalNumber());
    })
}    

function playGame(){
    $(".img-rounded").on("click", function(e) {
        var imageValue = ($(this).attr("data-crystal-value"));
        imageValue = parseInt(imageValue);
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
        animateCSS("W");
        showStatus("jackInTheBox");
        IntervalId = setTimeout(function() {
            showStatus("jackInTheBox");
        }, 8000);
        resetValues();
    }
    else if(myPoints > computerNumber){
        
        myLosses++;
        $("#myLossesId").text(" " + myLosses);
        animateCSS("L");
        showStatus("slideInDown");
        IntervalId = setTimeout(function() {
            showStatus("slideInDown");
        }, 8000);
        resetValues();
    }    

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
      $("#myScore").text('');
      clearInterval(IntervalId);
      $("#animateH2Id").attr("style", "opacity:1");

     
}


function showStatus(x) {
    $('#animateH2Id').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
      $("#animateH2Id").attr("style", "opacity:0");
    });

  };

function animateCSS(myResult){

            var animateWin = $("#animateCSSId");
            var myResponse='';
            animateWin.attr("display", "block")
            if(myResult == "W")
            {
             myResponse = "You Won ! ";
            } 
            else if(myResult =="L")
            {
                myResponse = "You Lose This round";
            }
            $("#animateH2Id").attr("font-size", "150%");
            $("#animateH2Id").text(myResponse);
                    
        

        // $('.js--animation').change(function(){
        //     var anim = $(this).val();
        //     showStatus("zoomIn");
        //   });
    

    
    }


$("#playerTotalId").text(computerNumber)
addImageCrystalToDiv();
playGame();



