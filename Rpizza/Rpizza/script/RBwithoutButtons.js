rpizzaImages = new Array("images/Slide1.png", "images/Slide2.png", "images/Slide3.png")
thisRpizza = 0
imgCt = rpizzaImages.length
function rotate() {
    if (document.images) {
        thisRpizza++
        if (thisRpizza == imgCt) {
            thisRpizza = 0
        }
        document.rpizzaBanner.src = rpizzaImages[thisRpizza]
        setTimeout("rotate()", 3 * 1000)
    }
}