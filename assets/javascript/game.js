var computerNumber = Math.floor((Math.random() * 100) + 1);
var imageValue = [];
var myCrystalsImages = ["assets/images/diamond.jpg", "assets/images/bluesaphire.jpg",'assets/images/lightupcrystal.jpg','assets/images/quartz.jpg'];

function crystalNumber(){
    var crystalNumber = Math.floor((Math.random() * 100) + 1);
    return crystalNumber;
}

function addImageCrystalToDiv(){
    for(i=0; i < 4; i++){
        imageValue[i] = crystalNumber();
        console.log(imageValue[i]);
        var imageCrystal = $("<img>");  // add crystal image to the div 
        imageCrystal.addClass("img-thumbnail");
        imageCrystal.attr("src", myCrystalsImages[i] );
        imageCrystal.attr("data-crystal-value", crystalNumber());
        $("#myImages").append(imageCrystal);
    
    }
}

$("#playerTotalId").text(computerNumber)
addImageCrystalToDiv();

$(".img-thumbnail").on("click", function() {

   var imageValue = ($(this).attr("data-crystal-value"));
   console.log( imageValue);

})

