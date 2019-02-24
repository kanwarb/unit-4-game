var computerNumber = Math.floor((Math.random() * 39) + 1);
var imageValue = [];
var myCrystalsImages = ["assets/images/diamond.jpg", "assets/images/bluesaphire.jpg",'assets/images/lightupcrystal.jpg','assets/images/quartz.jpg'];
var myPoints =0;
var myWins =0;
var myLosses =0;

function crystalNumber(){
    var crystalNumber = Math.floor((Math.random() * 10) + 1);
    return crystalNumber;
}

function addImageCrystalToDiv(){
    for(i=0; i < 4; i++){
        imageValue[i] = crystalNumber();
        var imageCrystal = $("<img>");  // add crystal image to the div 
        imageCrystal.addClass("img-thumbnail");
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
    $(".img-thumbnail").on("click", function() {
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
        resetValues();
        
        alert("you won this round ");

    }
    else if(myPoints > computerNumber){
        
        myLosses++;
        $("#myLossesId").text(" " + myLosses);
        resetValues();
        alert("you Lost this round ");
    }    

}
function resetValues(){
      console.clear();
      myPoints =0;
      computerNumber = 0;
      imageValue = [];
      myPoints =0;
    //   myWins =0;
    //   myLosses = 0;
      computerNumber = Math.floor((Math.random() * 39) + 1);
      crystalNumber();
      updateImageCrystalValue();
      $("#playerTotalId").text(computerNumber);
      $("#myScore").text(0);

}
$("#playerTotalId").text(computerNumber)
addImageCrystalToDiv();
playGame();



